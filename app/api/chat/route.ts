import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// System prompt for Richard Law AI - Chinese Legal System
const SYSTEM_PROMPT = `您是理查德法律AI，集成在GPULaw平台中的专业法律助手。您基于中华人民共和国法律体系提供有帮助、准确的法律信息，同时保持重要的免责声明。

您的角色：
- 在6个业务领域提供清晰、可行的法律指导：婚姻家庭、劳动纠纷、房产纠纷、合同纠纷、交通事故和知识产权
- 分析法律情况并提供后续步骤
- 帮助起草法律文件和信函
- 用通俗语言解释法律概念
- 建议用户何时应升级到持证律师

重要准则：
- 始终提醒用户您提供一般法律信息，而非专业法律建议
- 鼓励用户就其具体情况咨询持证律师
- 保持同理心和专业态度
- 在需要时提出澄清问题
- 在适当时提供具体、可行的指导
- 在有帮助时引用相关法律或法规（如《民法典》、《劳动法》、《劳动合同法》等），但提醒用户进行验证

您涵盖的业务领域：
1. 婚姻家庭：离婚诉讼、子女抚养权、财产分割、继承纠纷、家庭暴力保护（参考《民法典》婚姻家庭编、继承编）
2. 劳动纠纷：劳动合同纠纷、工资拖欠、违法解雇、工伤赔偿、社保公积金纠纷（参考《劳动法》、《劳动合同法》）
3. 房产纠纷：房屋买卖纠纷、租赁合同纠纷、物业纠纷、房产证办理、拆迁补偿（参考《民法典》物权编）
4. 合同纠纷：买卖合同、借款合同、承揽合同、服务合同、合同违约赔偿（参考《民法典》合同编）
5. 交通事故：交通事故赔偿、人身伤害、保险理赔、责任认定、肇事逃逸（参考《道路交通安全法》、《民法典》侵权责任编）
6. 知识产权：商标注册、专利申请、著作权保护、侵权纠纷、商业秘密保护（参考《商标法》、《专利法》、《著作权法》）

请记住：您是一个有帮助的AI助手，而不是持证律师的替代品。对于复杂事务，始终建议联系GPULaw律师。所有建议仅供参考，不构成法律意见。`;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { messages, context } = body;

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: 'Messages array is required' },
        { status: 400 }
      );
    }

    // Add context to the conversation if provided (e.g., from case intake form)
    const contextMessage = context
      ? {
          role: 'system' as const,
          content: `User context: ${JSON.stringify(context)}`,
        }
      : null;

    const messagesWithSystem = [
      { role: 'system' as const, content: SYSTEM_PROMPT },
      ...(contextMessage ? [contextMessage] : []),
      ...messages,
    ];

    // Call OpenAI API with streaming
    const stream = await openai.chat.completions.create({
      model: 'gpt-4-turbo-preview',
      messages: messagesWithSystem,
      temperature: 0.7,
      max_tokens: 2000,
      stream: true,
    });

    // Create a readable stream
    const encoder = new TextEncoder();
    let fullResponse = '';

    const readableStream = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of stream) {
            const content = chunk.choices[0]?.delta?.content || '';
            if (content) {
              fullResponse += content;
              controller.enqueue(encoder.encode(`data: ${JSON.stringify({ content })}\n\n`));
            }
          }

          // After streaming is complete, generate suggested questions
          const suggestedQuestions = await generateSuggestedQuestions(messages, fullResponse);

          controller.enqueue(
            encoder.encode(`data: ${JSON.stringify({
              done: true,
              suggestedQuestions
            })}\n\n`)
          );

          controller.close();
        } catch (error) {
          console.error('Streaming error:', error);
          controller.error(error);
        }
      },
    });

    return new Response(readableStream, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    });
  } catch (error: any) {
    console.error('OpenAI API error:', error);

    // Handle specific error types
    if (error?.status === 401) {
      return NextResponse.json(
        { error: 'Invalid API key' },
        { status: 401 }
      );
    }

    if (error?.status === 429) {
      return NextResponse.json(
        { error: 'Rate limit exceeded. Please try again later.' },
        { status: 429 }
      );
    }

    return NextResponse.json(
      { error: 'An error occurred while processing your request' },
      { status: 500 }
    );
  }
}

// Helper function to generate suggested questions
async function generateSuggestedQuestions(messages: any[], aiResponse: string): Promise<string[]> {
  try {
    const suggestionPrompt = `基于以下对话，生成5个简短、相关的后续问题，这些问题应该与对话内容相关，并帮助用户探索相关的法律话题或下一步行动。请用简体中文生成问题。

对话内容：
用户：${messages[messages.length - 1]?.content || ''}
助手：${aiResponse}

只返回一个包含5个问题字符串的JSON数组，不要返回其他内容。示例格式：["问题1？", "问题2？", "问题3？", "问题4？", "问题5？"]`;

    const suggestionCompletion = await openai.chat.completions.create({
      model: 'gpt-4-turbo-preview',
      messages: [
        { role: 'system', content: '你是一个根据法律对话生成相关后续问题的助手。始终返回有效的JSON数组格式，问题使用简体中文。' },
        { role: 'user', content: suggestionPrompt },
      ],
      temperature: 0.8,
      max_tokens: 300,
    });

    const suggestionsText = suggestionCompletion.choices[0]?.message?.content || '[]';

    // Parse the JSON response
    try {
      const parsed = JSON.parse(suggestionsText);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed.slice(0, 5);
      }
    } catch (parseError) {
      console.error('Failed to parse suggested questions:', parseError);
    }
  } catch (suggestionError) {
    console.error('Error generating suggestions:', suggestionError);
  }

  // Fallback to default questions in Chinese
  return [
    "我的下一步应该怎么做？",
    "我需要咨询律师吗？",
    "我应该准备哪些文件？",
    "通常需要多长时间？",
    "可能需要多少费用？",
  ];
}

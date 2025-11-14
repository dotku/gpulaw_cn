'use client';

export default function Pricing() {
  const plans = [
    {
      name: "基础版",
      price: "$29",
      period: "/月",
      description: "满足日常需求的基本AI法律工具",
      features: [
        "无限次AI法律咨询",
        "基本文件生成",
        "法律问题分类",
        "覆盖6个业务领域",
        "电子邮件支持",
        "法律知识库访问",
      ],
      notIncluded: [
        "律师咨询",
        "律师文件审查",
        "法庭代理",
      ],
      buttonText: "开始使用基础版",
      popular: false,
      color: "from-gray-600 to-gray-800",
      borderColor: "border-gray-200",
    },
    {
      name: "专业版",
      price: "$99",
      period: "/月",
      description: "AI援助加有限律师服务",
      features: [
        "包含基础版所有功能，另加：",
        "每月2次律师咨询（每次30分钟）",
        "律师文件审查（最多5页）",
        "高级AI文件生成",
        "优先电子邮件和聊天支持",
        "额外律师服务时间折扣",
      ],
      notIncluded: [
        "无限次律师咨询",
        "法庭代理",
      ],
      buttonText: "获取专业版",
      popular: true,
      color: "from-blue-600 to-blue-800",
      borderColor: "border-blue-300",
    },
    {
      name: "高级版",
      price: "$299",
      period: "/月",
      description: "全方位AI+律师保护，让您安心无忧",
      features: [
        "包含专业版所有功能，另加：",
        "无限次律师咨询",
        "无限次文件审查",
        "专属案件经理",
        "法庭代理（每年最多2个案件）",
        "24/7电话支持",
        "家庭成员覆盖（最多4人）",
      ],
      notIncluded: [],
      buttonText: "升级高级版",
      popular: false,
      color: "from-amber-600 to-amber-800",
      borderColor: "border-amber-300",
    },
  ];

  return (
    <section id="membership" className="py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            选择您的保护级别
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            从纯AI援助到全面律师覆盖——找到适合您需求的方案
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-xl ${
                plan.popular ? 'border-4 ' + plan.borderColor + ' transform scale-105' : 'border-2 ' + plan.borderColor
              } overflow-hidden hover:shadow-2xl transition-all duration-300`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-bl-xl font-bold text-sm shadow-lg">
                    ⭐ 最受欢迎
                  </div>
                </div>
              )}

              <div className="p-6 sm:p-8">
                {/* Header */}
                <div className="mb-6 sm:mb-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm mb-4 sm:mb-6">{plan.description}</p>
                  <div className="flex items-baseline">
                    <span className={`text-4xl sm:text-5xl font-extrabold bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`}>
                      {plan.price}
                    </span>
                    <span className="text-gray-600 ml-2 text-sm sm:text-base">{plan.period}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6 sm:mb-8">
                  <ul className="space-y-4">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                        <span className={`text-gray-700 ${feature.includes('Everything') ? 'font-semibold' : ''}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                    {plan.notIncluded.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 opacity-50">
                        <svg className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"/>
                        </svg>
                        <span className="text-gray-400 line-through">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <button
                  className={`w-full py-3 sm:py-4 px-6 rounded-xl font-bold text-white bg-gradient-to-r ${plan.color} hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg text-base sm:text-lg ${
                    plan.popular ? 'ring-4 ring-blue-200' : ''
                  }`}
                >
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Money-Back Guarantee */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-white shadow-2xl">
          <div className="text-center max-w-3xl mx-auto">
            <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">✓</div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">30天退款保证</h3>
            <p className="text-base sm:text-lg lg:text-xl text-green-100 mb-4 sm:mb-6">
              无风险试用GPULaw。如果您在前30天内不完全满意，
              我们将退还您的会员费——无需任何理由。
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span>无合同约束</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span>随时取消</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span>全额退款</span>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-12 sm:mt-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8 sm:mb-10 px-2">常见问题</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-white rounded-xl p-5 sm:p-6 shadow-lg border-2 border-gray-200">
              <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">我可以升级或降级我的方案吗？</h4>
              <p className="text-sm sm:text-base text-gray-600">当然可以！您可以随时更改会员级别。升级立即生效，降级将在下一个账单周期生效。</p>
            </div>
            <div className="bg-white rounded-xl p-5 sm:p-6 shadow-lg border-2 border-gray-200">
              <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">律师在我所在州有执照吗？</h4>
              <p className="text-sm sm:text-base text-gray-600">是的，我们为您匹配在您所在司法管辖区持有执照且在相关业务领域经验丰富的律师。</p>
            </div>
            <div className="bg-white rounded-xl p-5 sm:p-6 shadow-lg border-2 border-gray-200">
              <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">如果我需要更多律师服务时间怎么办？</h4>
              <p className="text-sm sm:text-base text-gray-600">会员可以以折扣小时费率获得超出其方案限制的额外律师咨询服务。</p>
            </div>
            <div className="bg-white rounded-xl p-5 sm:p-6 shadow-lg border-2 border-gray-200">
              <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">我的信息会保密吗？</h4>
              <p className="text-sm sm:text-base text-gray-600">绝对保密。所有通信均受律师-客户特权和我们严格的隐私政策保护。</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

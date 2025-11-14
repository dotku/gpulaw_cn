export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-3xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 to-amber-400 bg-clip-text text-transparent">
              GPULaw
            </h3>
            <p className="text-gray-400 mb-4 text-sm">
              由持证律师支持的AI驱动法律保护。
              让每个人都能获得便捷且平价的法律服务。
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              <span>保密且安全</span>
            </div>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="text-lg font-bold mb-4">业务领域</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#practice-areas" className="text-gray-400 hover:text-white transition-colors">
                  婚姻家庭
                </a>
              </li>
              <li>
                <a href="#practice-areas" className="text-gray-400 hover:text-white transition-colors">
                  劳动纠纷
                </a>
              </li>
              <li>
                <a href="#practice-areas" className="text-gray-400 hover:text-white transition-colors">
                  房产纠纷
                </a>
              </li>
              <li>
                <a href="#practice-areas" className="text-gray-400 hover:text-white transition-colors">
                  合同纠纷
                </a>
              </li>
              <li>
                <a href="#practice-areas" className="text-gray-400 hover:text-white transition-colors">
                  交通事故
                </a>
              </li>
              <li>
                <a href="#practice-areas" className="text-gray-400 hover:text-white transition-colors">
                  知识产权
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-bold mb-4">资源</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors">
                  工作原理
                </a>
              </li>
              <li>
                <a href="#membership" className="text-gray-400 hover:text-white transition-colors">
                  价格
                </a>
              </li>
              <li>
                <a href="#get-help" className="text-gray-400 hover:text-white transition-colors">
                  立即获取帮助
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  法律知识库
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  AI法律助手
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  律师网络
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">联系我们</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                <a href="mailto:support@gpulaw.com" className="text-gray-400 hover:text-white transition-colors">
                  support@gpulaw.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                <a href="tel:1-800-GPU-LAWS" className="text-gray-400 hover:text-white transition-colors">
                  1-800-GPU-LAWS
                </a>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                </svg>
                <span className="text-gray-400">
                  24/7 AI支持<br/>
                  <span className="text-xs">周一至周五 9am-6pm 律师支持</span>
                </span>
              </li>
            </ul>

            {/* Social Media */}
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-400 rounded-lg flex items-center justify-center transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="border-t border-gray-800 pt-6 sm:pt-8 mb-6 sm:mb-8">
          <div className="bg-gray-800 rounded-lg sm:rounded-xl p-4 sm:p-6 border-l-4 border-amber-500">
            <h4 className="text-xs sm:text-sm font-bold text-amber-400 mb-2 sm:mb-3 flex items-center gap-2">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
              </svg>
              <span className="min-w-0">重要法律免责声明</span>
            </h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              <strong className="text-white">GPULaw是法律信息服务平台，不是律师事务所</strong>，平台本身不提供法律服务或法律建议。
              本平台提供的AI驱动工具和信息仅供一般法律知识参考，不应被解释为专业法律意见或建议。
              使用GPULaw平台不会建立律师-委托人关系，除非您通过我们的平台与具有中华人民共和国执业资格的律师建立正式委托关系。
              平台合作的执业律师是独立执业者，对其提供的法律服务独立承担责任。
              法律结果因案件具体情况而异，过往案例不代表未来结果。
              GPULaw会员服务提供法律信息工具和律师咨询渠道，但不保证任何特定的法律结果。
              如您有具体法律问题，请务必咨询具有执业资格的专业律师，以获得针对您具体情况的法律建议。
              本平台服务遵守中华人民共和国相关法律法规。
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-xs sm:text-sm">
              &copy; {new Date().getFullYear()} GPULaw. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                隐私政策
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                服务条款
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                律师网络条款
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                无障碍访问
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Cookie政策
              </a>
            </div>
          </div>

          {/* Additional Compliance Info */}
          <div className="mt-4 sm:mt-6 text-center px-2">
            <p className="text-xs text-gray-500">
              GPULaw平台由GPULaw Technologies, Inc.运营 | 执业律师对其法律服务独立承担责任
              <br className="hidden sm:inline"/>
              <span className="sm:hidden"> </span>
              AI技术由先进语言模型驱动 | 合作律师网络包括具有中华人民共和国执业资格的专业律师 | 服务遵守相关法律法规
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

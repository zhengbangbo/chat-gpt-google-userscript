const lang = navigator.appName === 'Netscape' ? navigator.language : navigator.userLanguage
let config = {}
switch (lang) {
  case 'zh-CN':
  case 'zh-SG':
    config = {
      waitingResponse: '等待 ChatGPT 响应...',
      login: '请在以下地址登录：',
      tooManyRequests: '1小时内请求太多。请稍后再试。',
      checkClouflare: '请通过 Cloudflare 安全检查，地址为',
      unknowError: '哦，可能是个错误，请检查或提交到',
      networkException: '网络异常，请刷新页面。',
      containerPosition: '容器位置 - 侧面(1)/顶部(0): ',
      chatGPTTranslate: 'ChatGPT 翻译',
    }
    break
  case 'zh-TW':
  case 'zh-HK':
    config = {
      waitingResponse: '等待 ChatGPT 回應...',
      login: '請在以下地址登錄：',
      tooManyRequests: '1小時內請求太多。請稍後再試。',
      checkClouflare: '請通過 Cloudflare 安全檢查，地址為',
      unknowError: '哦，可能是個錯誤，請檢查或提交到',
      networkException: '網路異常，請刷新頁面。',
      containerPosition: '容器位置 - 側面(1)/頂部(0):',
      chatGPTTranslate: 'ChatGPT 翻譯',
    }
    break
  default:
    config = {
      waitingResponse: 'Waiting for ChatGPT response...',
      login: 'Please login at ',
      tooManyRequests: 'Too many requests in 1 hour. Try again later.',
      checkClouflare: 'Please pass Cloudflare security check at ',
      unknowError: 'Oops, maybe it is a bug, please check or submit ',
      networkException: 'Network exception, please refresh the page.',
      containerPosition: 'Container Position - Side(1)/Top(0): ',
      chatGPTTranslate: 'ChatGPT Translate',
    }
}

export default function i18n(name) {
  return config[name] ? config[name] : name
}

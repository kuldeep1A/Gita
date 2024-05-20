export const authUtils = async ({ _setUTN, setJkd }) => {
  const _ = generateBrowserIdentifier()
  const _a = ['MTAyNTAzNTk3Ng==', 'LTEzOTU1NDMyMjg=', 'MTY5NTk3MTc5', 'LTUwNDI1MTA0OA==']

  setJkd(_)
  if (_a.includes(_)) {
    _setUTN(true)
  } else {
    console.error("You're not use the admin browser or network!")
    _setUTN(false)
  }
}

function generateBrowserIdentifier() {
  const userAgent = navigator.userAgent
  const platform = navigator.platform
  const plugins = Array.from(navigator.plugins).map(plugin => ({
    name: plugin.name,
    filename: plugin.filename,
    description: plugin.description,
  }))
  const pix = window.devicePixelRatio // (90%)
  const identifier = `${userAgent}_${platform}_${JSON.stringify(plugins)}_${pix}`
  const _dHash = hashString(window.btoa(unescape(encodeURIComponent(identifier))))
  return window.btoa(_dHash)
}

function hashString(str) {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i)
    hash &= hash
  }
  return hash
}

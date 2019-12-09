const createLanguagesObject = (languages) => {
  return languages.reduce((acc, elem) => {
    acc[elem] = []
    return acc
  }, {})
}

const localizeUrl = (language, defaultLang, url) => {
  return `/${language}${url}`.replace(`/${defaultLang}`, '')
}
const getUrlBase = (languages, url) => {
  languages.forEach((language)=>{
    url = url.replace(`/${language}/`, '/')
  })
  return url
}
const buildMenu = (languages, defaultLang, currentLang, currentUrlPath) => {
  return languages.map((lang,i)=>{
    currentUrlPath = getUrlBase(languages, currentUrlPath)
    const langMenuItem = {
        selected: false,
        link: currentUrlPath,
        langKey: lang
    }
    if (lang === currentLang)
        langMenuItem.selected = true
    
    if(lang != defaultLang)
        langMenuItem.link = '/' + lang + currentUrlPath
    return langMenuItem
  })
}
module.exports = {
  createLanguagesObject,
  localizeUrl,
  buildMenu
}
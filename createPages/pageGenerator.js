// langs is an array with all the languages our site supports
// defaultLang is the site's default language
const {langs, defaultLang} = require('../config/languages')
const path = require(`path`)
const {localizeUrl, createLanguagesObject} = require('../utils/localization')

module.exports = async (options, createPage, graphql) => {
  const {query, pageName} = options
  let templateName = options.templateName ? options.templateName : pageName
  const result = await graphql(query)

  if (result.errors) {
    console.error(result.errors)
  }

  const cosmicJSData = createLanguagesObject(langs)

  Object.values(result.data)[0].edges.forEach(({ node }) => {
    cosmicJSData[node.locale].push(node)
  })

  langs.forEach( lang =>{
     createPage({
      path: localizeUrl(lang, defaultLang, '/' + pageName),
      component: path.resolve(`src/templates/${templateName}.js`),
       context: {
          data: cosmicJSData[lang],
          lang: lang
       }
    })
  })
}

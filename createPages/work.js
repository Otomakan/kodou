/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const {langs, defaultLangKey} = require('../data/languages')
const path = require(`path`)
const {localizeUrl, createLanguagesObject} = require('../utils/localization')

module.exports = async (createPage, graphql) => {
  const result = await graphql(`
    {
      allCosmicjsWorks  {
        edges {
          node {
            title
            locale
            content
            metadata {
              description
              mainimage {
                imgix_url
              }
            }
          }
        }
      }
    }
  `)
  if (result.errors) {
    console.error(result.errors)
  }
  console.log(createLanguagesObject)
  const works = createLanguagesObject(langs)


  result.data.allCosmicjsWorks.edges.forEach(({ node }) => {
    works[node.locale].push(node)
  })
  console.log(works)

  langs.forEach( language =>{
     createPage({
      path: localizeUrl(language, defaultLangKey, '/work'),
      component: path.resolve(`src/templates/work.js`),
       context: {
         works: works[language]
       }
    })
  })
}
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const {langs, defaultLangKey} = require('../data/languages')
const path = require(`path`)
const {localizeUrl, createLanguagesObject} = require('../utils/localization')

module.exports =  async (createPage, graphql) => {
  const result = await graphql(`
    {
      allCosmicjsTeamMembers  {
        edges {
          node {
            title
            locale
            content
            metadata {
              profile_picture {
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
  const profiles = createLanguagesObject(langs)


  result.data.allCosmicjsTeamMembers.edges.forEach(({ node }) => {
    profiles[node.locale].push(node)
  })
  console.log(profiles)

  langs.forEach( language =>{
     createPage({
      path: localizeUrl(language, defaultLangKey, '/team'),
      component: path.resolve(`src/templates/team.js`),
       context: {
         profiles: profiles[language]
       }
    })
  })
}
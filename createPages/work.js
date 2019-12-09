const pageGenerator = require('./pageGenerator')

module.exports = async (createPage, graphql) => {
  const query = `
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
  `
    pageGenerator({
    query, 
    pageName: 'work'},
    createPage, graphql)
  
}
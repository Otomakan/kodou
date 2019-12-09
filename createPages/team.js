const pageGenerator = require('./pageGenerator')

module.exports =  async (createPage, graphql) => {
  const query =`
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
  `
  pageGenerator({
    query, 
    pageName: 'team'},
    createPage, graphql)
  
}
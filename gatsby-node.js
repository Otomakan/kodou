
const createTeam = require('./createPages/team')
const createWork = require('./createPages/work')
exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  await createWork(createPage, graphql)

  await createTeam(createPage, graphql)
}
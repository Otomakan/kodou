import React from "react"
import Body from './Body'
import { useStaticQuery, graphql } from "gatsby"

const JapaneseTeam = (props) => {
  const data = useStaticQuery(graphql`
    query JapaneseTeamMembers  {
    allCosmicjsTeamMembers(filter: {locale: {eq: "ja"}})  {
      edges {
        node {
          title
          content
          metadata {
            profile_picture {
              imgix_url
            }
          }
        }
      }
    }
  }`)
  return (
    <Body 
      lang="ja"
      edges={data.allCosmicjsTeamMembers.edges}
      {...props}/>
)
}


export default JapaneseTeam

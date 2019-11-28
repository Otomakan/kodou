import React from 'react'
import Body from './Body'
import { graphql, useStaticQuery } from "gatsby"

const EnglishTeam = (props) => {
   const data = useStaticQuery(graphql`
    query TeamMembers  {
    allCosmicjsTeamMembers(filter: {locale: {eq: "en"}})  {
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
  }
  `)
   return <Body lang="en" edges={data.allCosmicjsTeamMembers.edges} {...props}/>
}
export default EnglishTeam
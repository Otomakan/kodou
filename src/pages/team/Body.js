import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const TeamBody = (props) => {
  return (
  <Layout location={props.location}>
    <SEO title="Team" />
    <h1>Team</h1>
    {props.edges.map((edge,i)=>{
      const profile = edge.node
      return (
      <div key={i} className="columns">
        <div className="column"><img src={profile.metadata.profile_picture.imgix_url}/></div>
        <div className="column is-two-thirds">
          <h3>{profile.title}</h3>
          {profile.content}
        </div>
      </div>)
    })}
  </Layout>
)
}


export default TeamBody

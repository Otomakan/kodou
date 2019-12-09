import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const TeamPage = (props) => {
  console.log(props)
  const profiles = props.pageContext.data
  const {lang} = props.pageContext
  return (
  <Layout location={props.location} lang={lang}>
    <SEO title="Team" />
    <h1>Team</h1>
    {profiles.map((profile,i)=>{
      return (
      <div key={i} className="columns">
        <div className="column">
          <div className="square-image" style={{backgroundImage: `url("${profile.metadata.profile_picture.imgix_url}")`}}/>
        </div>
        <div className="column is-two-thirds">
          <div className="team-member-title">{profile.title}</div>
          <div dangerouslySetInnerHTML={{ __html: profile.content }}/>
        </div>
      </div>)
    })}
  </Layout>
)
}


export default TeamPage

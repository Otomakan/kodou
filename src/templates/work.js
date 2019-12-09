import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const TeamPage = (props) => {
  const works = props.pageContext.data
  const lang = props.pageContext.lang
  return (
  <Layout location={props.location} lang={lang}>
    <SEO title="Work" />
    <h1>Work</h1>
    {works.map((work,i)=>{
      return (
      <div key={i} className="columns">
        <div className="column  is-two-thirds">
          <div dangerouslySetInnerHTML={{ __html: work.content }}/>
        </div>
        <div className="column">
          <div className="team-member-title">{work.title}</div>
        </div>
      </div>)
    })}
  </Layout>
)
}


export default TeamPage

import React from "react"
import Layout from "../../components/layout"
import FrontImage from "./frontImage"
import SEO from "../../components/seo"

const IndexPage = (props) => (
  <Layout location={props.location}>
    <SEO title="Home" />
    <FrontImage />

    <h2> KODOU IS...</h2>

    <div className="content">
    <p>KODOU converts human heartbeat rhythms into light, collects light from 10 to tens of thousands of people in one place, and creates an expression work only for that place. It is a participatory art expression and social experiment project that explores what we feel and recognize through this experience. We will conduct this experiment all over Japan and around the world, with our base in Tokyo, Japan.
    </p>

    <h5>1. Transform the rhythm of our heartbeat into light. </h5>
      <p>It beats 70 times a minute, 100,000 times a day, and 2 billion times a lifetime. Each time, blood spreads throughout the body. The heartbeat device we have developed senses this movement and converts it into light. Human heartbeats are transmitted as light from the heart to the fingertips and from the fingertips to the outside of the body.
      </p>
          
      <h5>2. Do our beats synchronize?</h5>
        <p>Papua New Guinea has a famous tree called “Firefly Tree”. Tens of thousands of fireflies gather on this tree and shine with the same rhythm. We met this firefly synchronization phenomenon and had a hypothesis. “If firefly light synchronizes, can a human Kodo also synchronize?” We KODOU will experiment with this hypothesis all over the world.</p>
      
        <h5>What can change if our heartbeats are synchronized?</h5> 
          <p>If my heartbeat is synchronized with the heartbeat of a stranger at all. When that happens, what are you, what are human beings, and what will be their perceptions? I will search for questions without answers.</p>
    </div>
  </Layout>
)

export default IndexPage

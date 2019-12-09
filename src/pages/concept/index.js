import React from "react"
// import { Link } from "gatsby"
import Layout from "../../components/layout"
import YouTube from 'react-youtube'
import SEO from "../../components/seo"
import LinesImage from './LinesImage'
import WatchingLinesImage from './WatchingLinesImage'

const IndexPage = (props) => (
  <Layout location={props.location}>
      <SEO title="Concept" />
      <h1>Concept</h1>
      <h2>Story</h2>
      <div className="content">
        <p>In 1917, there is a text contributed by an adventurer named Philip Laurent in a science paper.</p> 
        <div className="quote">I've seen fireflies shine at the same time, maybe 20 years ago. No, it might just be that way. I couldn't believe my eyes. This is because such a phenomenon goes against all the laws of nature.</div>
        <p>Speaking of fireflies, it is a summer feature of Japan, and everybody, from children to adults, feels beauty.</p> 
        <div className="quote">Many people may know the song “This is my favorite! My favorite is that.” However, I have never seen a phenomenon in which hundreds, hundreds, or tens of thousands of fireflies shine in sync. In fact, besides Philip Laurent above, there are many adventurers and scientists who have witnessed the firefly synchronous blinking phenomenon. An adventurer said, "I thought my eyes were cramped."</div>
        <p>Papua New Guinea has a famous single tree called "Firefly Tree". In the summer, tens of thousands of fireflies gather on this tree and witness the shining appearance. Everyone who sees this figure is overwhelmed by the mystery and beauty of this world.</p>
        <figure className="image is-16by9">
          <YouTube
            videoId="Ls6jJnJ2CuQ"                  // defaults -> null
            className="youtube-video full"                // defaults -> null
            // containerClassName="youtube-video-container"
          />  
        </figure>
        <p>When we saw this firefly image, we had a hypothesis.</p>
        <div className="quote">If firefly light synchronizes, isn't human Kodo also synchronized?</div>
        <p>So, we actually made a beating device that converts human beating into light. The human body beats 70 times a minute, 100,000 times a day, and 2 billion times a lifetime. Each time, blood spreads throughout the body. When the blood reaches the fingertip of the hand, the heartbeat device acquires blood flow information with a pulse sensor and converts the blood flow into light.</p>
        <LinesImage/>
        <WatchingLinesImage/>

        <p>We will use this beating device to visualize human beating as light throughout Japan and around the world. At that time, is it possible for human beats to actually synchronize while increasing the scale to 1, 2, 5, 10, 100, 1000? We will conduct experiments in various parts of the world to find out when that happens. 
        </p>

        <p>What would you feel if you witnessed the moment when the rhythm of this heartbeat synchronized? What is human being, what is self, and is it an experience that shakes the definition itself? I don't know. It is imperative that we who run this project want to witness the moment when this synchronization occurs, and the moment when the light of the heartbeat overlaps. I am in love with the beauty of that moment.</p>

        <p>Finally, I would like you to see a video of when “Earth Egg” was born in Aso, Kumamoto Prefecture. At this time, a wide range of people, from 3-year-olds to women in their 70s, illuminated a single ball with their heartbeat. It is the video at that time. It seems to me that it's out of sync. How will you see this video?</p>
      
        <figure className="image is-16by9">
          <YouTube
            videoId="sAatS_Ym7tI"                  // defaults -> null
            className="youtube-video full"                // defaults -> null
            // containerClassName="youtube-video-container"
          />  
        </figure>

        <p>If there is a person who feels something in this video, I would be happy if you could participate in this activity. I would like to conclude this sentence with a few words at the end.</p>

        <div className="quote"> Your heartbeats enlight the world, the world is full of Synchronicity.<br/> 
        Your heartbeats enlight the world, the world is full of Synchronicity. 
        The world is full of synchronicity.</div>
      </div>
  
  </Layout>
)

export default IndexPage
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "line_pictures.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="hero">
      <Img className="large-image-container" fluid={data.placeholderImage.childImageSharp.fluid} />
    </div>
  )
}

export default Image

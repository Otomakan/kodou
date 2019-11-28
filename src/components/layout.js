/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "../styles/main.scss"
import Header from "./header"

const Layout = ({ children, location }) => {
  const data = useStaticQuery(graphql`
    query SiteInfoQuery {
      site {
        siteMetadata {
          title
          languages {
            defaultLangKey
            langs
          }    
        }
      }
    }
  `)
  return (
    <>
      <Header 
        location={location}
        defaultLangKey={data.site.siteMetadata.languages.defaultLangKey}
        languages={data.site.siteMetadata.languages.langs}
        siteTitle={data.site.siteMetadata.title} />
        <main className="section">
          <div className="container"> 
            {children}
          </div>
        </main>
        <footer>
          <div className="footer">
            <div className="content has-text-centered">
              © {new Date().getFullYear()}, Built by 
              {/* <a href="https://jmisteli.com"> Jack Misteli</a> */}
                        </div>
            </div>
        </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "../styles/main.scss"
import Header from "./header"
import { IntlProvider, FormattedDate } from "react-intl"

const Layout = ({ children, location, lang }) => {

  // We populated the siteMetaData in `gatsby-config.js` and are extracting it here for some extra language context
  const data = useStaticQuery(graphql`
    query SiteInfoQuery {
      site {
        siteMetadata {
          title
          languages {
            defaultLang
            langs
          }    
        }
      }
    }
  `)
  
  // langs is an array of all the supported languages
  // defaultLang is the default site language
  // title is the website's title
  const { title} = data.site.siteMetadata
  const {langs, defaultLang } = data.site.siteMetadata.languages
  return (
    // We use IntlProvider to set the default language of our page
    <IntlProvider
      locale={lang}
      defaultLocale={defaultLang}

    >
      <Header 
        location={location}
        defaultLang={defaultLang}
        languages={langs}
        siteTitle={title} />
        <main className="section">
          <div className="container"> 
            {children}
          </div>
        </main>
        <footer>
          <div className="footer">
            <div className="content has-text-centered">
            {/* FormattedDate will format our date according to the language we set in IntlProvider locale prop */}
              © <FormattedDate value={new Date()}
               year="numeric"
                month="long"
                day="numeric"
                weekday="long" />, Built by 
              <a href="https://jmisteli.com"> Jack Misteli</a>
            </div>
          </div>
        </footer>
    </IntlProvider>
  )
}

export default Layout
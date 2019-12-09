import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n'
import langmap from 'langmap'
import {useState} from 'react'
import {localizeUrl, buildMenu} from '../../utils/localization'

const Header = ({ languages, location, defaultLang}) => {

  const url = location.pathname
  const currentLangKey = getCurrentLangKey(languages, defaultLang, url)
  
  // Create a home link by adding a slash before the language and if it
  const homeLink = localizeUrl(currentLangKey, defaultLang, '/')

  // // Get langs return language menu information

  // langsMenu will allow us to build a dropdown with all the available language options
  const langsMenu = buildMenu(languages, defaultLang, currentLangKey, url)
  // On the `/team` page this will return the following array
  //  [{selected: true, link: "/team/", langKey: "en"},
  //  {selected: false, link: "/ja/team/", langKey: "ja"}]

  // All the navigation menu item titles
  const allLanguageTitles = {
    'en':['Concept', 'Work', 'Team', 'News', 'Contact'],
    'ja': ['コンセプト', '仕事', 'チーム', 'ニュース', '連絡先']
  }

  // Selecting the current language and default to english titles
  const currentLanguageTitles = allLanguageTitles[currentLangKey] || allLanguageTitles['en']

  // allNavigationLinks contains all the pages name, with urls in every supported language
  const allNavigationLinks = currentLanguageTitles.map((page, i) => ({
    name: page,
    url: `${homeLink.replace(defaultLang, '')}${allLanguageTitles.en[i].toLowerCase()}`
  }))
  
  console.log(allNavigationLinks)
  const [isOpen, setIsOpen] = useState(false)
  
  return (
  <div className="container">
  <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link className="brand-title" to={homeLink}>
          KODOU
        </Link>
     
        <div 
          onClick={()=>{setIsOpen(!isOpen)}}
          role="button" className={`navbar-burger burger ${isOpen? 'is-active' : null}`} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </div>
      </div>

      <div id="navbarBasicExample" className={`navbar-menu  ${isOpen? 'is-active' : null}`}>
          <div className="navbar-start">
            <Link to={homeLink} className="navbar-item">
              HOME
            </Link>
            {allNavigationLinks.map((link, i) => (
            <Link key={i} to={link.url} className="navbar-item">
              {link.name.toUpperCase()}
            </Link>
            ))}
          </div>
          <div className="navbar-end">
            <div className="navbar-item has-dropdown is-hoverable">
              <div className="navbar-link">
                {langmap[currentLangKey]['englishName']}
              </div>

              <div className="navbar-dropdown">
                {langsMenu.map((lang)=>(
                  !lang.selected && 
                  <Link key={lang.langKey} to={lang.link} className="navbar-item">
                    {langmap[lang.langKey]['englishName']}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
    <style>{`
      navbar-item {
        // align-items: center;
      }
      .brand-title {
        display: flex;
        align-items: center;
        color: var(--main-color);
        margin-right: 2em;
        font-weight: bold;
        font-size: 2em;
      }
      
      `}</style>
  </nav>
  </div>

)}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

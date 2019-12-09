const languages = require('./config/languages')

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Kodou`,
    description: `Kodou's website about bringing digital art to your hearts`,
    author: `Jack Misteli`,
    languages
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    // Support got gatsby-plugin0i18n
    {
      resolve: 'gatsby-plugin-i18n',
      options: {        
        langKeyDefault: 'en',
        useLangKeyLayout: false
      }
    },

    // Adding SASS support
    `gatsby-plugin-sass`,

    `gatsby-transformer-sharp`, `gatsby-plugin-sharp`,

    
    //Cosmic configuration
    {
    resolve: `gatsby-source-cosmicjs`,
    options: {
      bucketSlug: process.env.COSMIC_BUCKET,
      objectTypes: [`team-members`, 'works'],
      // If you have enabled read_key to fetch data (optional).
      apiAccess: {
        read_key: process.env.COSMIC_ENV_KEY,
      }
    }
  },
  ],
}

module.exports = {
  siteMetadata: {
    title: `Justin Gluck, Front End Software Engineer`,
    description: `I'm a contract Front End developer based in London since 2011.`,
    author: `@gatsbyjs`,
    menuLinks: [
      {
        "name": "home",
        "link": "/"
      },
      {
        "name": "about",
        "link": "/page-2"
      },
      {
        "name": "experience",
        "link": "/page-2"
      },
      {
        "name": "portfolio",
        "link": "/page-2"
      },
      {
        "name": "contact",
        "link": "/page-2"
      }
    ]
  },
  plugins: [
    `gatsby-plugin-sass`,
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
        icon: `src/images/jg-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

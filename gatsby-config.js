/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Soham's Recipes",
    description: "Nice and clean recipes site",
    author: "@SohamDutta",
    person: { name: "Soham", age: "24" },
    simpleData: ["item1", "item2"],
    complexData: [{ name: "Soham", age: "24" }, { name: "Hussam", age: "24" }]
  },
  plugins: [`gatsby-plugin-styled-components`, `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `photos`,
        path: `${__dirname}/src/assets/images`,
      },

    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `inrpz1pfllgf`,
        accessToken: process.env.CONTENTFUL_API_KEY,
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Montserrat",
              variants: ["400"],
            },
            {
              family: "Inconsolata",
              variants: ["400", "500", "600", "700"],
            },
          ],
        },
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
}

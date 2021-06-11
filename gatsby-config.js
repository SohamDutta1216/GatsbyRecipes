/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "SimplyRecipes",
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
  ],
}

/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-gatsby-cloud",
    {
      resolve: "sass-resources-loader",
      options: {
        resources: ["./src/styles/mixin.scss"],
      },
    },
  ],
  siteMetadata: {
    title: "CV Creator",
  },
}

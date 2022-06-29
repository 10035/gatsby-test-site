module.exports = {
  siteMetadata: {
    title: `test-site`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
  {
    resolve: "gatsby-source-file-system",
    options: {
      name: 'blog',
      path: '${__dirname}/blog',
    }
  ],
}

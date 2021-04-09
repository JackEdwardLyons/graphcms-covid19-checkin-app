module.exports = {
  // Since `gatsby-plugin-typescript` is automatically included in Gatsby you
  // don't need to define it here (just if you need to change the options)
  plugins: [
    {
      resolve: `gatsby-source-graphcms`,
      options: {
        endpoint: `https://api-ap-northeast-1.graphcms.com/v2/ckn9v5i9g8q7y01wah8uc567m/master`,
      },
    },
  ],
};

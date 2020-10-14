import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export default {
  siteMetadata: {
    title: 'Slick Slices',
    siteUrl: 'https://sirmatters.gatsby.pizza',
    description: 'by SirMatters',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    {
      // name of the plugin to be added
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: '75l7oduf',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};

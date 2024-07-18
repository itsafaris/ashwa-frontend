import type { GatsbyConfig } from "gatsby";
import pkgjson from "./package.json";
import { SiteMetadata } from "./src/hooks/useSiteMetadata";

const config: GatsbyConfig = {
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  siteMetadata: {
    brandName: "Calmr",
    siteUrl: `https://www.trycalmr.com`,
    version: pkgjson.version,
    image: "/images/meta-image.jpg",
    title: `Most complete Blend of Ashwagandha for Modern Busy Women`,
    description:
      "Our all-in-one supplement blend - the only one you'll need to combat stress, sharpen focus, and boost energy. This revolutionary formula uniquely combines Ashwagandha, Rhodiola Extract, and Bacopa with essential vitamins and minerals, creating a powerhouse solution tailored specifically for the modern woman's needs.",
  } satisfies SiteMetadata,
  plugins: [
    `gatsby-plugin-tsconfig-paths`,
    "gatsby-plugin-emotion",
    // "gatsby-plugin-google-gtag",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/favicon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};

export default config;

import type { GatsbyConfig } from "gatsby";
import dotenv from "dotenv";
import { PostHogConfig } from "posthog-js";
import { isProdMode } from "./src/utils";

dotenv.config();

const config: GatsbyConfig = {
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
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

    {
      resolve: `gatsby-plugin-posthog`,
      options: {
        apiKey: "phc_8GZnMTIRMuj7aNKBpluPe46MiqUaFn4RiuH4TtCnmme",
        apiHost: "https://us.i.posthog.com",
        head: true,
        isEnabledDevMode: true,
        initOptions: {
          autocapture: true,
          debug: !isProdMode(),
          disable_session_recording: !isProdMode(),
          enable_heatmaps: true,
        } satisfies Partial<PostHogConfig>,
      },
    },

    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: "1151210512780170",
      },
    },
  ],
};

export default config;

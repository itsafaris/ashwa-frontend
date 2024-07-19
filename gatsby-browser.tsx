import React from "react";
import { GatsbyBrowser } from "gatsby";

import { initPosthog } from "./src/tracking";

import { RootWrapper } from "./src/RootWrapper";

export const wrapRootElement = ({ element }) => {
  return <RootWrapper>{element}</RootWrapper>;
};

// @ts-ignore
import pkgjson from "./package.json";

const POSTHOG_KEY = "phc_8GZnMTIRMuj7aNKBpluPe46MiqUaFn4RiuH4TtCnmme";
const POSTHOG_HOST = "https://us.i.posthog.com";

export const onClientEntry: GatsbyBrowser["onClientEntry"] = () => {
  initPosthog(POSTHOG_KEY, POSTHOG_HOST, pkgjson.version);
};

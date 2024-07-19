import React from "react";
import { GatsbyBrowser } from "gatsby";
import posthog from "posthog-js";

import pkgjson from "./package.json";
import { RootWrapper } from "./src/RootWrapper";

export const wrapRootElement = ({ element }) => {
  return <RootWrapper>{element}</RootWrapper>;
};

export const onClientEntry: GatsbyBrowser["onClientEntry"] = () => {
  posthog.register({
    frontend_version: pkgjson.version,
  });
};

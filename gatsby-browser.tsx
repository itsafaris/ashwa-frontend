import React from "react";
import { GatsbyBrowser } from "gatsby";

import pkgjson from "./package.json";
import { RootWrapper } from "./src/RootWrapper";
import { getPosthog } from "./src/tracking";

export const wrapRootElement = ({ element }) => {
  return <RootWrapper>{element}</RootWrapper>;
};

export const onClientEntry: GatsbyBrowser["onClientEntry"] = () => {
  getPosthog()?.register({
    frontend_version: pkgjson.version,
  });
};

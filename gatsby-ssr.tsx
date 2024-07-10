import React from "react";

import { RootWrapper } from "./src/RootWrapper";

export const wrapRootElement = ({ element }) => {
  return <RootWrapper>{element}</RootWrapper>;
};

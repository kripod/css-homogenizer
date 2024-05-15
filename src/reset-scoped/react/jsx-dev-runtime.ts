import { Fragment, jsxDEV as jsxDEVBase } from "react/jsx-dev-runtime";

import { transformProps } from "./transformProps.js";

export { Fragment };

export const jsxDEV: typeof jsxDEVBase = (type, props, ...restArgs) =>
  jsxDEVBase(type, transformProps(type, props), ...restArgs);

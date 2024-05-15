import { Fragment, jsx as jsxBase, jsxs as jsxsBase } from "react/jsx-runtime";

import { transformProps } from "./transformProps.js";

export { Fragment };

export const jsx: typeof jsxBase = (type, props, ...restArgs) =>
  jsxBase(type, transformProps(type, props), ...restArgs);

export const jsxs: typeof jsxsBase = (type, props, ...restArgs) =>
  jsxsBase(type, transformProps(type, props), ...restArgs);

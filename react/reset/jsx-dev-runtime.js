import * as ReactJSXDEVRuntime from "react/jsx-dev-runtime";

import { transformProps } from "./_transformProps";

export const Fragment = ReactJSXDEVRuntime.Fragment;

/**
 * https://github.com/reactjs/rfcs/pull/107
 * @param {*} type
 * @param {object} props
 * @param {string} key
 */
export function jsxDEV(type, props, key, isStaticChildren, source, self) {
  return ReactJSXDEVRuntime.jsxDEV(
    type,
    transformProps(type, props),
    key,
    isStaticChildren,
    source,
    self,
  );
}

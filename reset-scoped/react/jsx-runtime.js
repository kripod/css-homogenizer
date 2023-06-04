import * as ReactJSXRuntime from "react/jsx-runtime";

import { transformProps } from "./transformProps";

export const { Fragment } = ReactJSXRuntime;

/**
 * @param {React.ElementType} type
 * @param {Object.<string, *>} props
 * @param {...*} restArgs
 */
export function jsx(type, props, ...restArgs) {
  return ReactJSXRuntime.jsx(type, transformProps(type, props), ...restArgs);
}

/**
 * @param {React.ElementType} type
 * @param {Object.<string, *>} props
 * @param {...*} restArgs
 */
export function jsxs(type, props, ...restArgs) {
  return ReactJSXRuntime.jsxs(type, transformProps(type, props), ...restArgs);
}

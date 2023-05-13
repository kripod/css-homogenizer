import * as ReactJSXRuntime from "react/jsx-runtime";

import { transformProps } from "./_transformProps";

export const Fragment = ReactJSXRuntime.Fragment;

/**
 * https://github.com/reactjs/rfcs/pull/107
 * @param {*} type
 * @param {object} props
 * @param {string} key
 */
export function jsx(type, props, key) {
  return ReactJSXRuntime.jsx(type, transformProps(type, props), key);
}

/**
 * https://github.com/reactjs/rfcs/pull/107
 * @param {*} type
 * @param {object} props
 * @param {string} key
 */
export function jsxs(type, props, key) {
  return ReactJSXRuntime.jsxs(type, transformProps(type, props), key);
}

import * as ReactJSXRuntime from "react/jsx-runtime";

import { transformProps } from "./transformProps";

// @ts-expect-error
export const { Fragment } = ReactJSXRuntime;

export function jsx(
  type: React.ElementType,
  props: { [key: string]: any },
  ...restArgs: any[]
) {
  // @ts-expect-error
  return ReactJSXRuntime.jsx(type, transformProps(type, props), ...restArgs);
}

export function jsxs(
  type: React.ElementType,
  props: { [key: string]: any },
  ...restArgs: any[]
) {
  // @ts-expect-error
  return ReactJSXRuntime.jsxs(type, transformProps(type, props), ...restArgs);
}

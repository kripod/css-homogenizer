import * as ReactJSXRuntime from "react/jsx-runtime";

import { transformProps } from "./transformProps";

export const Fragment: React.ExoticComponent<{ children?: React.ReactNode }> =
  ReactJSXRuntime.Fragment;

export function jsx(
  type: React.ElementType,
  props: { [key: string]: any },
  ...restArgs: any[]
): React.ReactElement {
  return ReactJSXRuntime.jsx(type, transformProps(type, props), ...restArgs);
}

export function jsxs(
  type: React.ElementType,
  props: { [key: string]: any },
  ...restArgs: any[]
): React.ReactElement {
  return ReactJSXRuntime.jsxs(type, transformProps(type, props), ...restArgs);
}

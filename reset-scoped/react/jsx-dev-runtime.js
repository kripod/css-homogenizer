import * as ReactJSXDEVRuntime from "react/jsx-dev-runtime";

import { transformProps } from "./transformProps";

export const { Fragment } = ReactJSXDEVRuntime;

/**
 * @param {React.ElementType} type
 * @param {Object.<string, *>} props
 * @param {...*} restArgs
 */
export function jsxDEV(type, props, ...restArgs) {
  return ReactJSXDEVRuntime.jsxDEV(
    type,
    transformProps(type, props),
    ...restArgs,
  );
}

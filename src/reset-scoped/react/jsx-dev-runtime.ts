import * as ReactJSXDEVRuntime from "react/jsx-dev-runtime";

import { transformProps } from "./transformProps";

// @ts-expect-error
export const { Fragment } = ReactJSXDEVRuntime;

export function jsxDEV(
  type: React.ElementType,
  props: { [key: string]: any },
  ...restArgs: any[]
) {
  // @ts-expect-error
  return ReactJSXDEVRuntime.jsxDEV(
    type,
    transformProps(type, props),
    ...restArgs,
  );
}

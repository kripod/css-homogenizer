import * as ReactJSXDEVRuntime from "react/jsx-dev-runtime";

import { transformProps } from "./transformProps";

export const Fragment: React.ExoticComponent<{ children?: React.ReactNode }> =
  ReactJSXDEVRuntime.Fragment;

export function jsxDEV(
  type: React.ElementType,
  props: { [key: string]: any },
  ...restArgs: any[]
): React.ReactElement {
  return ReactJSXDEVRuntime.jsxDEV(
    type,
    transformProps(type, props),
    ...restArgs,
  );
}

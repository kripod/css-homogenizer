import * as React from "react";

import { transformProps } from "./transformProps";

export function createElement(
  type: React.ElementType,
  props: { [key: string]: any },
  ...restArgs: any[]
) {
  return React.createElement(type, transformProps(type, props), ...restArgs);
}

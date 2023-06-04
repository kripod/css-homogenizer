import * as React from "react";

import { transformProps } from "./transformProps";

/**
 * @param {React.ElementType} type
 * @param {Object.<string, *>} props
 * @param {...*} restArgs
 */
export function createElement(type, props, ...restArgs) {
  return React.createElement(type, transformProps(type, props), ...restArgs);
}

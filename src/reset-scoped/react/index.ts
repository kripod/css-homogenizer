import { createElement as createElementBase } from "react";

import { transformProps } from "./transformProps.js";

export const createElement = (
  type: React.ElementType,
  props: unknown,
  ...restArgs: any[]
) => createElementBase(type, transformProps(type, props), ...restArgs);

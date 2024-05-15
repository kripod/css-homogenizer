import { getResetClassName } from "../index.js";

export function transformProps(type: React.ElementType, props: unknown) {
  if (typeof type === "string") {
    const resetClassName = getResetClassName(type);
    if (resetClassName !== undefined) {
      return typeof props === "object" && props !== null
        ? {
            ...props,
            className:
              "className" in props
                ? resetClassName + " " + props.className
                : resetClassName,
          }
        : {
            className: resetClassName,
          };
    }
  }
  return props;
}

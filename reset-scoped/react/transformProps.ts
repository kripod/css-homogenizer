import { getResetClassName } from "../index";

export function transformProps(
  type: React.ElementType,
  props: { [key: string]: any },
) {
  const resetClassName =
    typeof type === "string" ? getResetClassName(type) : undefined;
  return resetClassName !== undefined
    ? {
        ...props,
        className: props.className
          ? `${resetClassName} ${props.className}`
          : resetClassName,
      }
    : props;
}

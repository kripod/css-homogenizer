import { getResetClassName } from "../index";

/**
 * @param {React.ElementType} type
 * @param {Object.<string, *>} props
 */
export function transformProps(type, props) {
  const resetClassName = getResetClassName(type);
  return resetClassName !== undefined
    ? {
        ...props,
        className: props.className
          ? `${resetClassName} ${props.className}`
          : resetClassName,
      }
    : props;
}

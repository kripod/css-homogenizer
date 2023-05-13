const resetElements = new Set([
  "a",
  "address",
  "blockquote",
  "body",
  "button",
  "dd",
  "dl",
  "fieldset",
  "figure",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "hr",
  "html",
  "iframe",
  "input",
  "legend",
  "menu",
  "ol",
  "p",
  "pre",
  "select",
  "table",
  "td",
  "textarea",
  "th",
  "ul",
]);

/**
 * @param {*} type
 * @param {object} props
 */
export function transformProps(type, props) {
  const clonedProps = { ...props };
  if (resetElements.has(type)) {
    const prefix = `_${type}`;
    clonedProps.className = clonedProps.className
      ? `${prefix} ${clonedProps.className}`
      : prefix;
  }
  return clonedProps;
}

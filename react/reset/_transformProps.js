/**
 * @param {string} className
 */
function lowerSpecificity(className) {
  return className.replace(/\S+/g, "[:where(&)]:$&");
}

const appendedClassNameByType = new Map(
  Object.entries({
    html: "leading-[1]",
    body: "m-[0px]",
    p: "m-[0px]",
    h1: "m-[0px] [font:inherit]",
    h2: "m-[0px] [font:inherit]",
    h3: "m-[0px] [font:inherit]",
    h4: "m-[0px] [font:inherit]",
    h5: "m-[0px] [font:inherit]",
    h6: "m-[0px] [font:inherit]",
    blockquote: "m-[0px]",
    dl: "m-[0px]",
    dd: "m-[0px]",
    figure: "m-[0px]",
    pre: "m-[0px]",
    hr: "m-[0px] border-[0px]",
    fieldset: "m-[0px] border-[0px] p-[0px]",
    button:
      "m-[0px] border-[0px] bg-[transparent] p-[0px] text-[inherit] [font:inherit]",
    select:
      "m-[0px] border-[0px] bg-[transparent] p-[0px] text-[inherit] [font:inherit]",
    input:
      "m-[0px] border-[0px] bg-[transparent] p-[0px] text-[inherit] [font:inherit] placeholder:text-[gray] placeholder:opacity-[1]",
    textarea:
      "m-[0px] border-[0px] bg-[transparent] p-[0px] text-[inherit] [font:inherit] placeholder:text-[gray] placeholder:opacity-[1]",
    ol: "m-[0px] list-[none] p-[0px]",
    ul: "m-[0px] list-[none] p-[0px]",
    menu: "m-[0px] list-[none] p-[0px]",
    th: "p-[0px] [font:inherit] [text-align:inherit]",
    td: "p-[0px]",
    legend: "p-[0px]",
    iframe: "border-[0px]",
    address: "[font:inherit]",
    a: "text-[inherit] [text-decoration:inherit]",
    table: "border-spacing-[0px]",
  }).map(([key, value]) => [key, lowerSpecificity(value)]),
);

/**
 * @param {*} type
 * @param {object} props
 */
export function transformProps(type, props) {
  const clonedProps = { ...props };
  const appendedClassName = appendedClassNameByType.get(type);
  if (appendedClassName != null) {
    clonedProps.className = clonedProps.className
      ? `${clonedProps.className} ${appendedClassName}`
      : appendedClassName;
  }
  return clonedProps;
}

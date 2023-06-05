export const resetElements = [
  "a",
  "address",
  "blockquote",
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
] as const;

const resetElementsSet = new Set<string>(resetElements);

export function getResetClassName(
  element: (typeof resetElements)[number] | (string & {}),
) {
  return resetElementsSet.has(element) ? `_${element}` : undefined;
}

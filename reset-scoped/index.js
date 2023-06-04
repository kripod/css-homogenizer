export const resetElements = /** @type {const} */ ([
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
]);

/** @type {Set.<string>} */
const resetElementsSet = new Set(resetElements);

/**
 * @param {(typeof resetElements)[number] | (string & {})} element
 */
export function getResetClassName(element) {
  return resetElementsSet.has(element) ? `_${element}` : undefined;
}

<p align="center">
	<img alt="css-homogenizer" src="https://raw.githubusercontent.com/kripod/css-homogenizer/main/assets/logo.svg?sanitize=true" width="524">
</p>

<p align="center">
	Base CSS encouraging proper HTML semantics and the use of custom design tokens
</p>

<p align="center">
	<a href="https://www.npmjs.com/package/css-homogenizer"><img alt="npm" src="https://img.shields.io/npm/v/css-homogenizer"></a>
</p>

## Backstory

Browsing through the issues of [CSS Remedy](https://github.com/jensimmons/cssremedy), I came across an important observation by Jen Simmons:

> Why don't people use `<fieldset>` far more — instead of divs in their forms?
>
> Perhaps it's because fieldset comes with ugly default styling.

This made me question common [HTML rendering suggestions](https://html.spec.whatwg.org/multipage/rendering.html). Each design is different, so **there isn't a single set of sensible defaults** for every website.

Style normalization is crucial for a consistent user experience among browsers. With the emergence of various design systems, however, **CSS normalizers and resets should coexist and complement each other.**

Catering for the needs of token-based theming systems, this project was born.

## Usage

1.  Install the library and a normalizer with your package manager (or use [a CDN](https://www.jsdelivr.com/package/npm/css-homogenizer)):

    ```sh
    npm install css-homogenizer modern-normalize
    ```

    _Using either [modern-normalize](https://github.com/sindresorhus/modern-normalize) or [@csstools/normalize.css](https://github.com/csstools/normalize.css) is optional but recommended to fix common browser inconsistencies._

2.  Include the following styles **in the order below, before any custom CSS:**

    ```js
    import "modern-normalize/modern-normalize.css";
    import "css-homogenizer/reset.css"; // or "css-homogenizer/reset-scoped.css"
    import "css-homogenizer/base.css";
    ```

    You may adopt each stylesheet one by one.

    Please refer to your framework’s guidelines for importing CSS files at the top level. Plain `<link>` tags may also be used, but be aware of the [performance costs](https://csswizardry.com/2018/11/css-and-network-performance/).

## What's included?

### [`reset.css`](./reset.css)

Nullifies spacings, borders and several typography-related settings:

- The default line height is reduced to match each element's own font size.
- Heading (`h1`–`h6`), `th` and `address` elements inherit their font properties and text alignment from parents.
- List (`ul`, `ol`, `menu`) and `a` elements are unstyled to promote proper HTML semantics over misleading visuals.
- Form controls are unstyled to cater for overrides.
- Placeholders have `opacity: 1` set for consistency between browsers.

Obsolete and deprecated HTML elements are ignored, as their usage is strongly discouraged.

### [`reset-scoped.css`](./reset-scoped.css)

Scoped variant of the reset which targets classes instead of element types.

- Classes are prefixed by `_` to avoid collisions with other selectors. E.g. `._p` contains declarations applicable to `p` elements.
- Rules targeting `html` and `body` elements are omitted, as the scoped stylesheet is meant to be used primarily within component libraries, not apps.

#### Usage with React

When using a compiler like Babel, the [underlying JSX runtime](https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html) may be overridden. This allows for auto-injecting scoped reset classes to plain HTML elements on the fly:

- `<p>Hi</p>` → `<p class="_p">Hi</p>`
- `<p className="custom">Hi</p>` → `<p class="_p custom">Hi</p>`

```jsonc
// babel.config.json
{
  "presets": [
    [
      "@babel/preset-react",
      {
        "runtime": "automatic",
        "importSource": "css-homogenizer/reset-scoped/react",
      },
    ],
  ],
}
```

#### Usage manually

You may attach a scoped reset class to an element on your own, e.g.:

```html
<p class="_p">Hi</p>
```

To see all the classes available, execute the following snippet:

```js
import { getResetClassName, resetElements } from "css-homogenizer/reset-scoped";

console.log(resetElements.map((element) => getResetClassName(element)));
```

Helper methods also come handy when dealing with third-party libraries, e.g.:

```jsx
import { Listbox } from "@headlessui/react";
import { getResetClassName } from "css-homogenizer/reset-scoped";

function Select(/* … */) {
  return (
    <Listbox /* … */>
      <Listbox.Button className={getResetClassName("button")}>
        {/* … */}
      </Listbox.Button>
      {/* … */}
    </Listbox>
  );
}
```

### [`base.css`](./base.css)

Provides a minimalistic set of generally useful rules. Please refer to the file's inline comments for further details.

## Browser support

- Latest Chrome
- Latest Firefox
- Latest Safari

## Acknowledgements

This project was primarily inspired by [Reset CSS](https://meyerweb.com/eric/tools/css/reset/), [CSS Remedy](https://github.com/jensimmons/cssremedy) and [sanitize.css](https://github.com/csstools/sanitize.css). It wouldn't have been possible without the long-standing efforts of the authors behind those predecessors.

The logo's test tube emoji is courtesy of [Twemoji](https://twemoji.twitter.com/) and the font in use is [Lobster](https://fonts.google.com/specimen/Lobster).

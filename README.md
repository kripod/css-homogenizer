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

    ```shell
    npm install css-homogenizer modern-normalize
    ```

    _Using [modern-normalize](https://github.com/sindresorhus/modern-normalize) is optional but recommended to fix common browser inconsistencies._

2.  Include the following global styles **in order, before any custom CSS:**

    ```js
    import "modern-normalize/modern-normalize.css";
    import "css-homogenizer/reset.css";
    import "css-homogenizer/opinionated-base.css";
    ```

    Embed the snippet or parts of it according to your framework/workflow documentation.

    Plain `<link>` tags may also be used, but make sure to review [performance guidelines](https://csswizardry.com/2018/11/css-and-network-performance/) carefully.

## What's included?

### [`reset.css`](./reset.css)

Nullifies spacings, borders and several typography-related settings:

- The default line height is reduced to match each element's own font size.
- Heading (`h1`–`h6`), `th` and `address` elements inherit their font properties and text alignment from parents.
- Lists (`ul`, `ol`, `menu`) are unstyled to promote proper HTML semantics over misleading visuals.

Form element styles are kept intact, maintaining the native look on each platform. Obsolete and deprecated HTML elements are ignored, as their usage is strongly discouraged.

### [`opinionated-base.css`](./opinionated-base.css)

Provides a minimalistic set of generally useful rules. Please refer to the file's inline comments for further details.

## Browser support

- Latest Chrome
- Latest Firefox
- Latest Safari

## Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/kripod"><img src="https://avatars3.githubusercontent.com/u/14854048?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Kristóf Poduszló</b></sub></a><br /><a href="#maintenance-kripod" title="Maintenance">🚧</a> <a href="https://github.com/kripod/record-like-deep-assign/commits?author=kripod" title="Code">💻</a> <a href="https://github.com/kripod/record-like-deep-assign/commits?author=kripod" title="Documentation">📖</a> <a href="#ideas-kripod" title="Ideas, Planning, & Feedback">🤔</a> <a href="#infra-kripod" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

## Acknowledgements

This project was primarily inspired by [Reset CSS](https://meyerweb.com/eric/tools/css/reset/), [sanitize.css](https://github.com/csstools/sanitize.css) and [CSS Remedy](https://github.com/jensimmons/cssremedy). It wouldn't have been possible without the long-standing efforts of the authors behind those predecessors.

The logo's test tube emoji is courtesy of [Twemoji](https://twemoji.twitter.com/) and the font in use is [Lobster](https://fonts.google.com/specimen/Lobster).

# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [3.2.0] - 2023-06-05

### Added

- **reset-scoped:** ship CommonJS modules alongside ESM

### Removed

- **reset:** main package entry point as an undocumented alias

## [3.1.0] - 2023-06-04

### Added

- **reset-scoped:** initial release

## [3.0.2] - 2023-06-04

### Fixed

- **base:** respect `hidden` attribute of embedded content elements (`img`, `iframe`, `embed`, `object`, `video`, `audio`, `svg`) and `canvas`

## [3.0.1] - 2023-06-03

### Fixed

- **reset:** replace `border: 0` with `border-width: 0` for compatibility with base styles

## [3.0.0] - 2023-06-03

### Added

- **base:** set `box-sizing: border-box` on `*, ::before, ::after`
- **base:** set `border-style: solid` and `border-width: 0` on on `*, ::before, ::after` to allow adding a border with just a `border-width`
- **base:** set `tab-size: 2` on `html` to prevent overflow in code blocks
- **base:** set `-webkit-text-size-adjust: 100%` on `html` to prevent erroneous text scaling in iOS Safari
- **base:** set `margin: 0` on `body`
- **base:** make `embed` and `object` elements responsive

### Changed

- **base:** reorder styles for better maintainability

### Removed

- **base:** redundant `height: auto` on `canvas`
- **base:** strict enforcement of `display: none` when a `hidden` attribute is present

## [2.1.0] - 2023-06-03

### Added

- **reset:** inherit `letter-spacing` and `word-spacing` on form controls

## [2.0.1] - 2023-05-27

### Changed

- **reset:** apply `::placeholder` styles only on `input` and `textarea`
- **reset:** reorder styles for better maintainability

## [2.0.0] - 2023-05-11

### Added

- **reset:** nullify `padding`, `border` and `background` on form controls
- **reset:** inherit `font` and `color` on form controls
- **reset:** inherit `color` and `text-decoration` on links
- **reset:** set `opacity: 1` and `color: gray` on `::placeholder` to make Firefox styles consistent

### Fixed

- **base:** `hr` border width and style

### Changed

- **base:** rename `opinionated-base.css` to `base.css`
- **reset:** set `line-height: 1` on `html` instead of `body`

## [1.1.0] - 2020-08-20

### Added

- **base:** vertical `writing-mode` support for changing the `resize` property of `textarea` elements

## [1.0.0] - 2020-08-18

### Added

- **reset:** initial release
- **base:** initial release

[unreleased]: https://github.com/kripod/css-homogenizer/compare/v3.2.0...HEAD
[3.2.0]: https://github.com/kripod/css-homogenizer/compare/v3.1.0...v3.2.0
[3.1.0]: https://github.com/kripod/css-homogenizer/compare/v3.0.2...v3.1.0
[3.0.2]: https://github.com/kripod/css-homogenizer/compare/v3.0.1...v3.0.2
[3.0.1]: https://github.com/kripod/css-homogenizer/compare/v3.0.0...v3.0.1
[3.0.0]: https://github.com/kripod/css-homogenizer/compare/v2.1.0...v3.0.0
[2.1.0]: https://github.com/kripod/css-homogenizer/compare/v2.0.1...v2.1.0
[2.0.1]: https://github.com/kripod/css-homogenizer/compare/v2.0.0...v2.0.1
[2.0.0]: https://github.com/kripod/css-homogenizer/compare/v1.1.0...v2.0.0
[1.1.0]: https://github.com/kripod/css-homogenizer/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/kripod/css-homogenizer/releases/tag/v1.0.0

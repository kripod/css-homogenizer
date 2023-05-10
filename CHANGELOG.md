# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- **reset:** nullify `padding`, `border` and `background` on form controls
- **reset:** inherit `font` and `color` on form controls
- **reset:** inherit `color` and `text-decoration` on links
- **reset:** set `opacity: 1` and `color: gray` on `::placeholder` to make Firefox styles consistent

### Fixed

- **opinionated:** `hr` border width and style

### Changed

- **reset:** set `line-height: 1` on `html` instead of `body`

## [1.1.0] - 2020-08-20

### Added

- **opinionated:** vertical `writing-mode` support for changing the `resize` property of `textarea` elements ([bf89271](https://github.com/kripod/css-homogenizer/commit/bf89271abfbc62488ef098425aa58ff9b5ed4e18))

## [1.0.0] - 2020-08-18

### Added

- **reset:** initial release
- **opinionated:** initial release

[unreleased]: https://github.com/kripod/css-homogenizer/compare/v1.1.0...HEAD
[1.1.0]: https://github.com/kripod/css-homogenizer/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/kripod/css-homogenizer/releases/tag/v1.0.0

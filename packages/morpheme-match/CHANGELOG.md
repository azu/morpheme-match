# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [2.0.4](https://github.com/azu/morpheme-match/compare/v2.0.3...v2.0.4) (2019-10-20)


### Bug Fixes

* **morpheme-match:** fix ExpectedToken type ([b06e276](https://github.com/azu/morpheme-match/commit/b06e276))





# 2.0.0 (2019-06-14)


### Code Refactoring

* **morpheme-match:** Convert to TypeScript ([3b75f80](https://github.com/azu/morpheme-match/commit/3b75f80))
* **morpheme-match-all:** Convert to TypeScript ([8810ed9](https://github.com/azu/morpheme-match/commit/8810ed9))


### Features

* **morpheme-match-textlint:** add textlint wrapper ([#7](https://github.com/azu/morpheme-match/issues/7)) ([8f3be6a](https://github.com/azu/morpheme-match/commit/8f3be6a))


### BREAKING CHANGES

* **morpheme-match-all:** export { createTokenMatcher } instead of export default

You should `import { createMatcher } from "morpheme-match-all"` instead of `import createTokenMatcher from "morpheme-match-all"`
* **morpheme-match:** export { createTokenMatcher } instead of export default

You should `import { createTokenMatcher } from "morpheme-match"` instead of `import createTokenMatcher from "morpheme-match"`

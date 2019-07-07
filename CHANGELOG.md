# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [2.0.1](https://github.com/azu/morpheme-match/compare/v2.0.0...v2.0.1) (2019-07-07)


### Bug Fixes

* **textlint:** fix typing ([ef7c371](https://github.com/azu/morpheme-match/commit/ef7c371))





# [2.0.0](https://github.com/azu/morpheme-match/compare/1.2.1...2.0.0) (2019-06-14)


### Bug Fixes

* **api:** fix results `expected` to `dict` ([08156e8](https://github.com/azu/morpheme-match/commit/08156e8))
* **travis:** change deploy dir ([b403eb4](https://github.com/azu/morpheme-match/commit/b403eb4))


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

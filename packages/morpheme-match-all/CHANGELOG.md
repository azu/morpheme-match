# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [2.0.5](https://github.com/azu/morpheme-match-all/compare/v2.0.4...v2.0.5) (2019-10-20)


### Bug Fixes

* **morpheme-match-all:** fix generics type ([283f0fd](https://github.com/azu/morpheme-match-all/commit/283f0fd))





## [2.0.4](https://github.com/azu/morpheme-match-all/compare/v2.0.3...v2.0.4) (2019-10-20)

**Note:** Version bump only for package morpheme-match-all





## [2.0.1](https://github.com/azu/morpheme-match-all/compare/v2.0.0...v2.0.1) (2019-07-07)


### Bug Fixes

* **textlint:** fix typing ([ef7c371](https://github.com/azu/morpheme-match-all/commit/ef7c371))





# 2.0.0 (2019-06-14)


### Bug Fixes

* **api:** fix results `expected` to `dict` ([08156e8](https://github.com/azu/morpheme-match-all/commit/08156e8))


### Code Refactoring

* **morpheme-match-all:** Convert to TypeScript ([8810ed9](https://github.com/azu/morpheme-match-all/commit/8810ed9))


### Features

* **morpheme-match-textlint:** add textlint wrapper ([#7](https://github.com/azu/morpheme-match-all/issues/7)) ([8f3be6a](https://github.com/azu/morpheme-match-all/commit/8f3be6a))


### BREAKING CHANGES

* **morpheme-match-all:** export { createTokenMatcher } instead of export default

You should `import { createMatcher } from "morpheme-match-all"` instead of `import createTokenMatcher from "morpheme-match-all"`

# morpheme-match [![Actions Status: test](https://github.com/azu/morpheme-match/workflows/test/badge.svg)](https://github.com/azu/morpheme-match/actions?query=workflow%3A"test")

A monorepo for morpheme-match.

`morpheme-match`は日本語を形態素解析したトークンを元に、文章にマッチするかを判定するライブラリです。
文字列比較ベースでは誤検知しやすい辞書ベースのチェックを、形態素解析を使うことでより厳密に行うことが目的です。

## Demo 

- Visit: <https://azu.github.io/morpheme-match/>

## packages

- [morpheme-match](packages/morpheme-match)
    - Core library
- [morpheme-match-all](packages/morpheme-match-all)
    - A wrapper library of morpheme-match
    - Easy to use as library
- [morpheme-match-textlint](packages/morpheme-match-textlint)
    - A wrapper for textlint
    - Use it in textlint rule
- [@textlint-ja/textlint-rule-morpheme-match](https://github.com/textlint-ja/textlint-rule-morpheme-match)
    - A textlint rule using [morpheme-match-textlint](packages/morpheme-match-textlint)
- [website](website)
    - Demo site
    - <https://azu.github.io/morpheme-match/>

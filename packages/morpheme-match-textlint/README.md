# morpheme-match-textlint

morpheme-match for textlint.

This library provide matcher function that return reportable object for textlint.

- 

## Install

Install with [npm](https://www.npmjs.com/):

    npm install morpheme-match-textlint

## Usage

- [ ] TBO

### Tips

### `_capture`

`_capture` is special key for replacing message and expected. 


```js
const matchToken = createTokenMatcher([
    {
        "surface_form": "かも",
        "pos": "助詞",
        "pos_detail_1": "副助詞",
        "pos_detail_2": "*",
        "pos_detail_3": "*",
        "conjugated_type": "*",
        "conjugated_form": "*",
        "basic_form": "かも",
        "reading": "カモ",
        "pronunciation": "カモ",
        "_cature": "$1"
    }
]);
```

### `_skippable`

If the token has `_skippable`, this token will be handled as optional token.


```js
const matchToken = createTokenMatcher([
    {
        "surface_form": "かも",
    },
    {
        "surface_form": "、",
        "_skippable": true,
    },
    {
        "surface_form": "しれ",
    },
]);
```


## 関連

- [azu/morpheme-match-all: A wrapper of morpheme-match API. Match all kuromoji's tokens.](https://github.com/azu/morpheme-match-all)
    - A wrapper for morpheme-match
- [textlint-ja/textlint-rule-morpheme-match: 形態素解析結果のTokenベースの辞書でマッチするtextlintルール](https://github.com/textlint-ja/textlint-rule-morpheme-match)

## Changelog

See [Releases page](https://github.com/azu/morpheme-match/releases).

## Running tests

Install devDependencies and Run `npm test`:

    npm i -d && npm test

## Contributing

Pull requests and stars are always welcome.
For bugs and feature requests, [please create an issue](https://github.com/azu/morpheme-match/issues).

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

- [github/azu](https://github.com/azu)
- [twitter/azu_re](http://twitter.com/azu_re)

## License

MIT © azu

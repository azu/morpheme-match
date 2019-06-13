# morpheme-match 

morpheme-match provide match function that match token with sentence.

形態素解析したトークンを元に、文章にマッチするトークンが含まれているかをチェックするライブラリ。

## Install

Install with [npm](https://www.npmjs.com/):

    npm install morpheme-match

## Usage

### createTokenMatcher(expectedTokens): function

`createTokenMatcher()` return `function(token): { match: boolean, tokens?: Array, skipped? Array }`.

We want to check "名詞かもしれない" contain "かも" token. 
Write following:

See example code with [azu.github.io/morpheme-match/#名詞(かも)しれない](http://azu.github.io/morpheme-match/#名詞(かも)しれない).

```js
import {createTokenMatcher} from "morpheme-match";
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
        "pronunciation": "カモ"
    }
]);
const tokens = [
    {
        "surface_form": "名詞",
        "pos": "名詞",
        "pos_detail_1": "一般",
        "pos_detail_2": "*",
        "pos_detail_3": "*",
        "conjugated_type": "*",
        "conjugated_form": "*",
        "basic_form": "名詞",
        "reading": "メイシ",
        "pronunciation": "メイシ"
    },
    // Hit!
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
        "pronunciation": "カモ"
    },
    {
        "surface_form": "しれ",
        "pos": "動詞",
        "pos_detail_1": "自立",
        "pos_detail_2": "*",
        "pos_detail_3": "*",
        "conjugated_type": "一段",
        "conjugated_form": "未然形",
        "basic_form": "しれる",
        "reading": "シレ",
        "pronunciation": "シレ"
    },
    {
        "surface_form": "ない",
        "pos": "助動詞",
        "pos_detail_1": "*",
        "pos_detail_2": "*",
        "pos_detail_3": "*",
        "conjugated_type": "特殊・ナイ",
        "conjugated_form": "基本形",
        "basic_form": "ない",
        "reading": "ナイ",
        "pronunciation": "ナイ"
    }
];
const result = tokens.some(token => {
    const {match} = matchToken(token);
    return match;
});
console.log(result);// true
```

If want to get matched token, write following:


```js
let resultTokens = [];
const result = tokens.some(token => {
    const {match, tokens, skipped} = matchToken(token);
    resultTokens = tokens;
    return match;
});
console.log(resultTokens);
/*
[ { surface_form: 'かも',
    pos: '助詞',
    pos_detail_1: '副助詞',
    pos_detail_2: '*',
    pos_detail_3: '*',
    conjugated_type: '*',
    conjugated_form: '*',
    basic_form: 'かも',
    reading: 'カモ',
    pronunciation: 'カモ' } ]
*/
```

### Tips

morpheme-matchは`_`から始まるキーを無視するため、メタ情報は`_`で書き込む事ができます。

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

キー`_skippable`が`true`の場合はマッチしない場合は無視されます。


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

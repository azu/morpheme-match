export type Token = {
    // 辞書内での単語ID
    word_id: number;
    // 単語タイプ(辞書に登録されている単語ならKNOWN; 未知語ならUNKNOWN)
    word_type: "KNOWN" | "UNKNOWN";
    // 表層形
    surface_form: string;
    // 品詞
    pos: string;
    // 品詞細分類1
    pos_detail_1: string;
    // 品詞細分類2
    pos_detail_2: string;
    // 品詞細分類3
    pos_detail_3: string;
    // 活用型
    conjugated_type: string;
    // 活用形
    conjugated_form: string;
    // 基本形
    basic_form: string;
    // 読み
    reading: string;
    // 発音
    pronunciation: string;
    // 単語の開始位置
    word_position: number;
};

export type ExpectedTokenAdditional = {
    _skippable?: boolean;
};

// ExpectedToken is based on Token
// But support array of each properties
export type ExpectedToken = {
        // 辞書内での単語ID
        word_id?: number | number[];
        // 単語タイプ(辞書に登録されている単語ならKNOWN; 未知語ならUNKNOWN)
        word_type?: "KNOWN" | "UNKNOWN";
        // 表層形
        surface_form?: string | string[];
        // 品詞
        pos?: string | string[];
        // 品詞細分類1
        pos_detail_1?: string | string[];
        // 品詞細分類2
        pos_detail_2?: string | string[];
        // 品詞細分類3
        pos_detail_3?: string | string[];
        // 活用型
        conjugated_type?: string | string[];
        // 活用形
        conjugated_form?: string | string[];
        // 基本形
        basic_form?: string | string[];
        // 読み
        reading?: string | string[];
        // 発音
        pronunciation?: string | string[];
        // 単語の開始位置
        word_position?: number | number[];
    }
    & ExpectedTokenAdditional
    & {
    [index: string]: any;
};
export type MatchResult = {
    match: boolean;
    tokens: Token[];
    skipped: boolean[];
};

function matchToken(token: Token, expectedToken: ExpectedToken) {
    return Object.keys(expectedToken).every(key => {
        // Ignore start with _ key
        if (key[0] === "_") {
            return true;
        }
        const expectedKey = key as keyof Partial<Token>;
        const actualValue = token[expectedKey];
        // support multiple value
        // "pos": ["名詞", "副詞"]
        const expectedValue = expectedToken[expectedKey];
        const expectedValues = Array.isArray(expectedValue) ? expectedValue : [expectedValue];
        return expectedValues.some(expectedValue => {
            return actualValue === expectedValue;
        });
    });
}

/**
 * Create matcher function that return { match : true , tokens []} if match the `token`.
 */
export function createTokenMatcher(expectedTokens: ExpectedToken[]) {
    let currentTokenPosition = 0;
    const tokenCount = expectedTokens.length;
    const matchTokens: Token[] = [];
    const matchSkipped: boolean[] = [];
    return (token: Token) => {
        while (currentTokenPosition < tokenCount) {
            const expectedToken = expectedTokens[currentTokenPosition];
            if (matchToken(token, expectedToken)) {
                matchTokens.push(token);
                matchSkipped.push(false);
                currentTokenPosition += 1;
                break;
            } else if (expectedToken["_skippable"]) {
                currentTokenPosition += 1;
                matchSkipped.push(true);
            } else {
                // reset position
                matchTokens.length = 0;
                matchSkipped.length = 0;
                currentTokenPosition = 0;
                break;
            }
        }
        // match all tokens
        if (currentTokenPosition === tokenCount) {
            const tokens = matchTokens.slice();
            const skipped = matchSkipped.slice();
            // match -> reset
            currentTokenPosition = 0;
            matchTokens.length = 0;
            matchSkipped.length = 0;
            return {
                match: true,
                tokens: tokens,
                skipped: skipped
            };
        }
        return {
            match: false,
            tokens: [],
            skipped: []
        };
    };
}

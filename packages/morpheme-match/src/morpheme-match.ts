export type Token = {
    surface_form: string;
    pos: string;
    pos_detail_1: string;
    pos_detail_2: string;
    pos_detail_3: string;
    conjugated_type: string;
    conjugated_form: string;
    basic_form: string;
    reading: string;
    pronunciation: string;
};

export type ExpectedTokenAdditional = {
    _skippable?: boolean
};
export type ExpectedToken = Partial<Token> & ExpectedTokenAdditional;
export type MatchResult = {
    match: boolean;
    tokens: Token[]
    skipped: boolean[]
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
        const expectedValues = Array.isArray(expectedValue)
            ? expectedValue
            : [expectedValue];
        return expectedValues.some(expectedValue => {
            return actualValue === expectedValue;
        });
    })
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
                skipped: skipped,
            };
        }
        return {
            match: false,
            tokens: [],
            skipped: [],
        };
    }
}

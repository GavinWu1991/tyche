export function lex(string: string) {
    const tokens = string.match(/(.*)\((.+)\)/mg);
    console.log(tokens)
    return tokens?.map(function (token) {
        return /^\d/.test(token) ? parseFloat(token) : token;
    });
}
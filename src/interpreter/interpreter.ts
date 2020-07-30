let visitors: any = {};
visitors["print"] = (content: any) => {
    return `<h1>${content}<h1>`
};

export function interpret(node: any): any {
    if (Array.isArray(node)) {
        const fn = interpret(node[0]);
        const args = node.slice(1).map(interpret);
        if (typeof fn === "function") {
            return fn(...args);
        } else {
            return node;
        }
    } else if (typeof node === "number") {
        return node;
    } else {
        return visitors[node];
    }
}
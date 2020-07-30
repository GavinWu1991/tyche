import {Parser} from "./parser";

export class SimpleHTMLParser implements Parser {
    parse(tokens: any[]): any[] {
        let nodes = [];
        tokens.shift();
        let token: any;
        while (token = tokens.shift()) {
            if (token == "(") {
                tokens.unshift(token);
                nodes.push(this.parse(tokens));
            } else if (token == ")") {
                return nodes;
            } else {
                nodes.push(token);
            }
        }

        return nodes;
    }
}
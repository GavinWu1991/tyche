import {parserFactory} from "./parser/parser-factory";
import {SimpleHTMLParser} from "./parser/simple-html-parser";
import {lex} from "./lexer/lexer";
import {interpret} from "./interpreter/interpreter";

parserFactory.registryParser("HTML", () => new SimpleHTMLParser());

function run(code: any) {
    let tokens = lex(code);
    if (typeof tokens === "undefined") {
        return;
    }
    console.log("tokens =>", tokens);

    const ast = parserFactory.getParser("HTML").parse(tokens.slice());
    console.log("ast =>", ast);

    const interpretedResult = interpret(ast);
    console.log("interpret(parse(lex(code))) =>", interpretedResult);
}

run("print(hello OCP YCY)\n");
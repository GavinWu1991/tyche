import {Parser} from "./parser";

class ParserFactory {
    _parsers = new Map();

    public registryParser = (parserName: string, generator: () => Parser) => {
        this._parsers.set(parserName, generator())
    }

    public getParser = (parserName: string): Parser => {
        return this._parsers.get(parserName);
    }
}

export const parserFactory = new ParserFactory();

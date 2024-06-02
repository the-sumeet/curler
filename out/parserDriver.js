"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const antlr4_1 = __importDefault(require("antlr4"));
const CurlLexer_js_1 = __importDefault(require("./antlr4/src/CurlLexer.js"));
const CurlParser_js_1 = __importDefault(require("./antlr4/src/CurlParser.js"));
const CurlListener_js_1 = __importDefault(require("./antlr4/src/CurlListener.js"));
class CurlerErrorListener extends antlr4_1.default.error.ErrorListener {
    constructor() {
        super();
        this.errors = [];
    }
    syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
        this.errors.push({
            line: line,
            column: column,
            msg: msg
        });
    }
}
class CustomCurlListener extends CurlListener_js_1.default {
    constructor() {
        super();
        this.result = {};
    }
    enterUri(ctx) {
        this.result.uri = ctx.getText();
    }
    enterMethodName(ctx) {
        this.result.method = ctx.getText();
    }
    enterHeaderValue(ctx) {
        this.result.header = ctx.getText();
    }
}
function parseCurlCommand(input) {
    const chars = new antlr4_1.default.InputStream(input);
    const lexer = new CurlLexer_js_1.default(chars);
    const tokens = new antlr4_1.default.CommonTokenStream(lexer);
    const parser = new CurlParser_js_1.default(tokens);
    parser.buildParseTrees = true;
    parser.removeErrorListeners();
    const errorListener = new CurlerErrorListener();
    parser.addErrorListener(errorListener);
    const tree = parser.curlCommand();
    if (errorListener.errors.length > 0) {
        return {
            result: null,
            errors: errorListener.errors
        };
    }
    const listener = new CustomCurlListener();
    antlr4_1.default.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);
    return {
        result: listener.result,
        errors: null
    };
}
let curlCommand = `curl example.com -H "Content: application/json"`;
const { result, errors } = parseCurlCommand(curlCommand);
console.log(result);
console.log(errors);
exports.default = parseCurlCommand;
//# sourceMappingURL=parserDriver.js.map
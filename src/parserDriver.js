import antlr4 from 'antlr4';
import CurlLexer from './antlr4/src/CurlLexer.js';
import CurlParser from './antlr4/src/CurlParser.js';
import CurlListener from './antlr4/src/CurlListener.js';


class CurlerErrorListener extends antlr4.error.ErrorListener {  

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

class CustomCurlListener extends CurlListener {
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
    const chars = new antlr4.InputStream(input);
    const lexer = new CurlLexer(chars);

    const tokens = new antlr4.CommonTokenStream(lexer);
    
    const parser = new CurlParser(tokens);
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
    antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);
    return {
        result: listener.result,
        errors: null
    };
}

let curlCommand = `curl example.com -H "Content: application/json"`;
const {result, errors} = parseCurlCommand(curlCommand);
console.log(result);
console.log(errors);

export default parseCurlCommand;
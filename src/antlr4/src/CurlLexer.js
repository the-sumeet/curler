// Generated from src/Curl.g4 by ANTLR 4.9.3
// jshint ignore: start
import antlr4 from 'antlr4';



const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0002\u0013\u0091\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003",
    "\u0004\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007",
    "\t\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b",
    "\u0003\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\r\u0003\r\u0003",
    "\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0006\u000fq",
    "\n\u000f\r\u000f\u000e\u000fr\u0003\u0010\u0003\u0010\u0003\u0010\u0003",
    "\u0010\u0007\u0010y\n\u0010\f\u0010\u000e\u0010|\u000b\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0007\u0011",
    "\u0084\n\u0011\f\u0011\u000e\u0011\u0087\u000b\u0011\u0003\u0011\u0003",
    "\u0011\u0003\u0012\u0006\u0012\u008c\n\u0012\r\u0012\u000e\u0012\u008d",
    "\u0003\u0012\u0003\u0012\u0002\u0002\u0013\u0003\u0003\u0005\u0004\u0007",
    "\u0005\t\u0006\u000b\u0007\r\b\u000f\t\u0011\n\u0013\u000b\u0015\f\u0017",
    "\r\u0019\u000e\u001b\u000f\u001d\u0010\u001f\u0011!\u0012#\u0013\u0003",
    "\u0002\u0005\u0005\u0002\"\"$$^^\u0004\u0002$$^^\u0005\u0002\u000b\f",
    "\u000f\u000f\"\"\u0002\u0097\u0002\u0003\u0003\u0002\u0002\u0002\u0002",
    "\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002",
    "\t\u0003\u0002\u0002\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0002",
    "\r\u0003\u0002\u0002\u0002\u0002\u000f\u0003\u0002\u0002\u0002\u0002",
    "\u0011\u0003\u0002\u0002\u0002\u0002\u0013\u0003\u0002\u0002\u0002\u0002",
    "\u0015\u0003\u0002\u0002\u0002\u0002\u0017\u0003\u0002\u0002\u0002\u0002",
    "\u0019\u0003\u0002\u0002\u0002\u0002\u001b\u0003\u0002\u0002\u0002\u0002",
    "\u001d\u0003\u0002\u0002\u0002\u0002\u001f\u0003\u0002\u0002\u0002\u0002",
    "!\u0003\u0002\u0002\u0002\u0002#\u0003\u0002\u0002\u0002\u0003%\u0003",
    "\u0002\u0002\u0002\u0005*\u0003\u0002\u0002\u0002\u0007-\u0003\u0002",
    "\u0002\u0002\t7\u0003\u0002\u0002\u0002\u000b:\u0003\u0002\u0002\u0002",
    "\rC\u0003\u0002\u0002\u0002\u000fF\u0003\u0002\u0002\u0002\u0011M\u0003",
    "\u0002\u0002\u0002\u0013P\u0003\u0002\u0002\u0002\u0015Y\u0003\u0002",
    "\u0002\u0002\u0017\\\u0003\u0002\u0002\u0002\u0019c\u0003\u0002\u0002",
    "\u0002\u001bf\u0003\u0002\u0002\u0002\u001dp\u0003\u0002\u0002\u0002",
    "\u001ft\u0003\u0002\u0002\u0002!\u007f\u0003\u0002\u0002\u0002#\u008b",
    "\u0003\u0002\u0002\u0002%&\u0007e\u0002\u0002&\'\u0007w\u0002\u0002",
    "\'(\u0007t\u0002\u0002()\u0007n\u0002\u0002)\u0004\u0003\u0002\u0002",
    "\u0002*+\u0007/\u0002\u0002+,\u0007Z\u0002\u0002,\u0006\u0003\u0002",
    "\u0002\u0002-.\u0007/\u0002\u0002./\u0007/\u0002\u0002/0\u0007t\u0002",
    "\u000201\u0007g\u0002\u000212\u0007s\u0002\u000223\u0007w\u0002\u0002",
    "34\u0007g\u0002\u000245\u0007u\u0002\u000256\u0007v\u0002\u00026\b\u0003",
    "\u0002\u0002\u000278\u0007/\u0002\u000289\u0007J\u0002\u00029\n\u0003",
    "\u0002\u0002\u0002:;\u0007/\u0002\u0002;<\u0007/\u0002\u0002<=\u0007",
    "j\u0002\u0002=>\u0007g\u0002\u0002>?\u0007c\u0002\u0002?@\u0007f\u0002",
    "\u0002@A\u0007g\u0002\u0002AB\u0007t\u0002\u0002B\f\u0003\u0002\u0002",
    "\u0002CD\u0007/\u0002\u0002DE\u0007f\u0002\u0002E\u000e\u0003\u0002",
    "\u0002\u0002FG\u0007/\u0002\u0002GH\u0007/\u0002\u0002HI\u0007f\u0002",
    "\u0002IJ\u0007c\u0002\u0002JK\u0007v\u0002\u0002KL\u0007c\u0002\u0002",
    "L\u0010\u0003\u0002\u0002\u0002MN\u0007/\u0002\u0002NO\u0007q\u0002",
    "\u0002O\u0012\u0003\u0002\u0002\u0002PQ\u0007/\u0002\u0002QR\u0007/",
    "\u0002\u0002RS\u0007q\u0002\u0002ST\u0007w\u0002\u0002TU\u0007v\u0002",
    "\u0002UV\u0007r\u0002\u0002VW\u0007w\u0002\u0002WX\u0007v\u0002\u0002",
    "X\u0014\u0003\u0002\u0002\u0002YZ\u0007/\u0002\u0002Z[\u0007w\u0002",
    "\u0002[\u0016\u0003\u0002\u0002\u0002\\]\u0007/\u0002\u0002]^\u0007",
    "/\u0002\u0002^_\u0007w\u0002\u0002_`\u0007u\u0002\u0002`a\u0007g\u0002",
    "\u0002ab\u0007t\u0002\u0002b\u0018\u0003\u0002\u0002\u0002cd\u0007/",
    "\u0002\u0002de\u0007H\u0002\u0002e\u001a\u0003\u0002\u0002\u0002fg\u0007",
    "/\u0002\u0002gh\u0007/\u0002\u0002hi\u0007h\u0002\u0002ij\u0007q\u0002",
    "\u0002jk\u0007t\u0002\u0002kl\u0007o\u0002\u0002l\u001c\u0003\u0002",
    "\u0002\u0002mq\n\u0002\u0002\u0002no\u0007^\u0002\u0002oq\u000b\u0002",
    "\u0002\u0002pm\u0003\u0002\u0002\u0002pn\u0003\u0002\u0002\u0002qr\u0003",
    "\u0002\u0002\u0002rp\u0003\u0002\u0002\u0002rs\u0003\u0002\u0002\u0002",
    "s\u001e\u0003\u0002\u0002\u0002tz\u0007$\u0002\u0002uy\n\u0003\u0002",
    "\u0002vw\u0007^\u0002\u0002wy\u000b\u0002\u0002\u0002xu\u0003\u0002",
    "\u0002\u0002xv\u0003\u0002\u0002\u0002y|\u0003\u0002\u0002\u0002zx\u0003",
    "\u0002\u0002\u0002z{\u0003\u0002\u0002\u0002{}\u0003\u0002\u0002\u0002",
    "|z\u0003\u0002\u0002\u0002}~\u0007$\u0002\u0002~ \u0003\u0002\u0002",
    "\u0002\u007f\u0085\u0007)\u0002\u0002\u0080\u0084\n\u0003\u0002\u0002",
    "\u0081\u0082\u0007^\u0002\u0002\u0082\u0084\u000b\u0002\u0002\u0002",
    "\u0083\u0080\u0003\u0002\u0002\u0002\u0083\u0081\u0003\u0002\u0002\u0002",
    "\u0084\u0087\u0003\u0002\u0002\u0002\u0085\u0083\u0003\u0002\u0002\u0002",
    "\u0085\u0086\u0003\u0002\u0002\u0002\u0086\u0088\u0003\u0002\u0002\u0002",
    "\u0087\u0085\u0003\u0002\u0002\u0002\u0088\u0089\u0007)\u0002\u0002",
    "\u0089\"\u0003\u0002\u0002\u0002\u008a\u008c\t\u0004\u0002\u0002\u008b",
    "\u008a\u0003\u0002\u0002\u0002\u008c\u008d\u0003\u0002\u0002\u0002\u008d",
    "\u008b\u0003\u0002\u0002\u0002\u008d\u008e\u0003\u0002\u0002\u0002\u008e",
    "\u008f\u0003\u0002\u0002\u0002\u008f\u0090\b\u0012\u0002\u0002\u0090",
    "$\u0003\u0002\u0002\u0002\n\u0002prxz\u0083\u0085\u008d\u0003\b\u0002",
    "\u0002"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class CurlLexer extends antlr4.Lexer {

    static grammarFileName = "Curl.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'curl'", "'-X'", "'--request'", "'-H'", 
                         "'--header'", "'-d'", "'--data'", "'-o'", "'--output'", 
                         "'-u'", "'--user'", "'-F'", "'--form'" ];
	static symbolicNames = [ null, null, null, null, null, null, null, null, 
                          null, null, null, null, null, null, "STRING", 
                          "DOUBLE_QUOTED_STRING", "SINGLE_QUOTED_STRING", 
                          "WS" ];
	static ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", 
                      "T__7", "T__8", "T__9", "T__10", "T__11", "T__12", 
                      "STRING", "DOUBLE_QUOTED_STRING", "SINGLE_QUOTED_STRING", 
                      "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    }

    get atn() {
        return atn;
    }
}

CurlLexer.EOF = antlr4.Token.EOF;
CurlLexer.T__0 = 1;
CurlLexer.T__1 = 2;
CurlLexer.T__2 = 3;
CurlLexer.T__3 = 4;
CurlLexer.T__4 = 5;
CurlLexer.T__5 = 6;
CurlLexer.T__6 = 7;
CurlLexer.T__7 = 8;
CurlLexer.T__8 = 9;
CurlLexer.T__9 = 10;
CurlLexer.T__10 = 11;
CurlLexer.T__11 = 12;
CurlLexer.T__12 = 13;
CurlLexer.STRING = 14;
CurlLexer.DOUBLE_QUOTED_STRING = 15;
CurlLexer.SINGLE_QUOTED_STRING = 16;
CurlLexer.WS = 17;



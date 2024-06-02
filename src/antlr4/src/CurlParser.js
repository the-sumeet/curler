// Generated from src/Curl.g4 by ANTLR 4.9.3
// jshint ignore: start
import antlr4 from 'antlr4';
import CurlListener from './CurlListener.js';

const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\u0013E\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0003\u0002\u0003\u0002\u0007\u0002\u001d\n\u0002\f\u0002",
    "\u000e\u0002 \u000b\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003)\n\u0003\u0003",
    "\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003\t\u0003",
    "\t\u0003\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\f\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003\r\u0002\u0002\u000e",
    "\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u0002\t",
    "\u0003\u0002\u0010\u0012\u0003\u0002\u0004\u0005\u0003\u0002\u0006\u0007",
    "\u0003\u0002\b\t\u0003\u0002\n\u000b\u0003\u0002\f\r\u0003\u0002\u000e",
    "\u000f\u0002?\u0002\u001a\u0003\u0002\u0002\u0002\u0004(\u0003\u0002",
    "\u0002\u0002\u0006*\u0003\u0002\u0002\u0002\b,\u0003\u0002\u0002\u0002",
    "\n.\u0003\u0002\u0002\u0002\f1\u0003\u0002\u0002\u0002\u000e3\u0003",
    "\u0002\u0002\u0002\u00106\u0003\u0002\u0002\u0002\u00128\u0003\u0002",
    "\u0002\u0002\u0014;\u0003\u0002\u0002\u0002\u0016>\u0003\u0002\u0002",
    "\u0002\u0018A\u0003\u0002\u0002\u0002\u001a\u001e\u0007\u0003\u0002",
    "\u0002\u001b\u001d\u0005\u0004\u0003\u0002\u001c\u001b\u0003\u0002\u0002",
    "\u0002\u001d \u0003\u0002\u0002\u0002\u001e\u001c\u0003\u0002\u0002",
    "\u0002\u001e\u001f\u0003\u0002\u0002\u0002\u001f\u0003\u0003\u0002\u0002",
    "\u0002 \u001e\u0003\u0002\u0002\u0002!)\u0005\u0006\u0004\u0002\")\u0005",
    "\n\u0006\u0002#)\u0005\u000e\b\u0002$)\u0005\u0012\n\u0002%)\u0005\u0014",
    "\u000b\u0002&)\u0005\u0016\f\u0002\')\u0005\u0018\r\u0002(!\u0003\u0002",
    "\u0002\u0002(\"\u0003\u0002\u0002\u0002(#\u0003\u0002\u0002\u0002($",
    "\u0003\u0002\u0002\u0002(%\u0003\u0002\u0002\u0002(&\u0003\u0002\u0002",
    "\u0002(\'\u0003\u0002\u0002\u0002)\u0005\u0003\u0002\u0002\u0002*+\u0005",
    "\b\u0005\u0002+\u0007\u0003\u0002\u0002\u0002,-\t\u0002\u0002\u0002",
    "-\t\u0003\u0002\u0002\u0002./\t\u0003\u0002\u0002/0\u0005\f\u0007\u0002",
    "0\u000b\u0003\u0002\u0002\u000212\u0005\b\u0005\u00022\r\u0003\u0002",
    "\u0002\u000234\t\u0004\u0002\u000245\u0005\u0010\t\u00025\u000f\u0003",
    "\u0002\u0002\u000267\u0005\b\u0005\u00027\u0011\u0003\u0002\u0002\u0002",
    "89\t\u0005\u0002\u00029:\u0005\b\u0005\u0002:\u0013\u0003\u0002\u0002",
    "\u0002;<\t\u0006\u0002\u0002<=\u0007\u0010\u0002\u0002=\u0015\u0003",
    "\u0002\u0002\u0002>?\t\u0007\u0002\u0002?@\u0007\u0010\u0002\u0002@",
    "\u0017\u0003\u0002\u0002\u0002AB\t\b\u0002\u0002BC\u0007\u0010\u0002",
    "\u0002C\u0019\u0003\u0002\u0002\u0002\u0004\u001e("].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class CurlParser extends antlr4.Parser {

    static grammarFileName = "Curl.g4";
    static literalNames = [ null, "'curl'", "'-X'", "'--request'", "'-H'", 
                            "'--header'", "'-d'", "'--data'", "'-o'", "'--output'", 
                            "'-u'", "'--user'", "'-F'", "'--form'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, "STRING", 
                             "DOUBLE_QUOTED_STRING", "SINGLE_QUOTED_STRING", 
                             "WS" ];
    static ruleNames = [ "curlCommand", "curlOptions", "uri", "string", 
                         "method", "methodName", "header", "headerValue", 
                         "data", "output", "user", "form" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = CurlParser.ruleNames;
        this.literalNames = CurlParser.literalNames;
        this.symbolicNames = CurlParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	curlCommand() {
	    let localctx = new CurlCommandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, CurlParser.RULE_curlCommand);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 24;
	        this.match(CurlParser.T__0);
	        this.state = 28;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CurlParser.T__1) | (1 << CurlParser.T__2) | (1 << CurlParser.T__3) | (1 << CurlParser.T__4) | (1 << CurlParser.T__5) | (1 << CurlParser.T__6) | (1 << CurlParser.T__7) | (1 << CurlParser.T__8) | (1 << CurlParser.T__9) | (1 << CurlParser.T__10) | (1 << CurlParser.T__11) | (1 << CurlParser.T__12) | (1 << CurlParser.STRING) | (1 << CurlParser.DOUBLE_QUOTED_STRING) | (1 << CurlParser.SINGLE_QUOTED_STRING))) !== 0)) {
	            this.state = 25;
	            this.curlOptions();
	            this.state = 30;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	curlOptions() {
	    let localctx = new CurlOptionsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, CurlParser.RULE_curlOptions);
	    try {
	        this.state = 38;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case CurlParser.STRING:
	        case CurlParser.DOUBLE_QUOTED_STRING:
	        case CurlParser.SINGLE_QUOTED_STRING:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 31;
	            this.uri();
	            break;
	        case CurlParser.T__1:
	        case CurlParser.T__2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 32;
	            this.method();
	            break;
	        case CurlParser.T__3:
	        case CurlParser.T__4:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 33;
	            this.header();
	            break;
	        case CurlParser.T__5:
	        case CurlParser.T__6:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 34;
	            this.data();
	            break;
	        case CurlParser.T__7:
	        case CurlParser.T__8:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 35;
	            this.output();
	            break;
	        case CurlParser.T__9:
	        case CurlParser.T__10:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 36;
	            this.user();
	            break;
	        case CurlParser.T__11:
	        case CurlParser.T__12:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 37;
	            this.form();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	uri() {
	    let localctx = new UriContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, CurlParser.RULE_uri);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 40;
	        this.string();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	string() {
	    let localctx = new StringContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, CurlParser.RULE_string);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 42;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CurlParser.STRING) | (1 << CurlParser.DOUBLE_QUOTED_STRING) | (1 << CurlParser.SINGLE_QUOTED_STRING))) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	method() {
	    let localctx = new MethodContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, CurlParser.RULE_method);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 44;
	        _la = this._input.LA(1);
	        if(!(_la===CurlParser.T__1 || _la===CurlParser.T__2)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 45;
	        this.methodName();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	methodName() {
	    let localctx = new MethodNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, CurlParser.RULE_methodName);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 47;
	        this.string();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	header() {
	    let localctx = new HeaderContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, CurlParser.RULE_header);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 49;
	        _la = this._input.LA(1);
	        if(!(_la===CurlParser.T__3 || _la===CurlParser.T__4)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 50;
	        this.headerValue();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	headerValue() {
	    let localctx = new HeaderValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, CurlParser.RULE_headerValue);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 52;
	        this.string();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	data() {
	    let localctx = new DataContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, CurlParser.RULE_data);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 54;
	        _la = this._input.LA(1);
	        if(!(_la===CurlParser.T__5 || _la===CurlParser.T__6)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 55;
	        this.string();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	output() {
	    let localctx = new OutputContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, CurlParser.RULE_output);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 57;
	        _la = this._input.LA(1);
	        if(!(_la===CurlParser.T__7 || _la===CurlParser.T__8)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 58;
	        this.match(CurlParser.STRING);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	user() {
	    let localctx = new UserContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, CurlParser.RULE_user);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 60;
	        _la = this._input.LA(1);
	        if(!(_la===CurlParser.T__9 || _la===CurlParser.T__10)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 61;
	        this.match(CurlParser.STRING);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	form() {
	    let localctx = new FormContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, CurlParser.RULE_form);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 63;
	        _la = this._input.LA(1);
	        if(!(_la===CurlParser.T__11 || _la===CurlParser.T__12)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 64;
	        this.match(CurlParser.STRING);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

CurlParser.EOF = antlr4.Token.EOF;
CurlParser.T__0 = 1;
CurlParser.T__1 = 2;
CurlParser.T__2 = 3;
CurlParser.T__3 = 4;
CurlParser.T__4 = 5;
CurlParser.T__5 = 6;
CurlParser.T__6 = 7;
CurlParser.T__7 = 8;
CurlParser.T__8 = 9;
CurlParser.T__9 = 10;
CurlParser.T__10 = 11;
CurlParser.T__11 = 12;
CurlParser.T__12 = 13;
CurlParser.STRING = 14;
CurlParser.DOUBLE_QUOTED_STRING = 15;
CurlParser.SINGLE_QUOTED_STRING = 16;
CurlParser.WS = 17;

CurlParser.RULE_curlCommand = 0;
CurlParser.RULE_curlOptions = 1;
CurlParser.RULE_uri = 2;
CurlParser.RULE_string = 3;
CurlParser.RULE_method = 4;
CurlParser.RULE_methodName = 5;
CurlParser.RULE_header = 6;
CurlParser.RULE_headerValue = 7;
CurlParser.RULE_data = 8;
CurlParser.RULE_output = 9;
CurlParser.RULE_user = 10;
CurlParser.RULE_form = 11;

class CurlCommandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CurlParser.RULE_curlCommand;
    }

	curlOptions = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CurlOptionsContext);
	    } else {
	        return this.getTypedRuleContext(CurlOptionsContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof CurlListener ) {
	        listener.enterCurlCommand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CurlListener ) {
	        listener.exitCurlCommand(this);
		}
	}


}



class CurlOptionsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CurlParser.RULE_curlOptions;
    }

	uri() {
	    return this.getTypedRuleContext(UriContext,0);
	};

	method() {
	    return this.getTypedRuleContext(MethodContext,0);
	};

	header() {
	    return this.getTypedRuleContext(HeaderContext,0);
	};

	data() {
	    return this.getTypedRuleContext(DataContext,0);
	};

	output() {
	    return this.getTypedRuleContext(OutputContext,0);
	};

	user() {
	    return this.getTypedRuleContext(UserContext,0);
	};

	form() {
	    return this.getTypedRuleContext(FormContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CurlListener ) {
	        listener.enterCurlOptions(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CurlListener ) {
	        listener.exitCurlOptions(this);
		}
	}


}



class UriContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CurlParser.RULE_uri;
    }

	string() {
	    return this.getTypedRuleContext(StringContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CurlListener ) {
	        listener.enterUri(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CurlListener ) {
	        listener.exitUri(this);
		}
	}


}



class StringContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CurlParser.RULE_string;
    }

	STRING() {
	    return this.getToken(CurlParser.STRING, 0);
	};

	DOUBLE_QUOTED_STRING() {
	    return this.getToken(CurlParser.DOUBLE_QUOTED_STRING, 0);
	};

	SINGLE_QUOTED_STRING() {
	    return this.getToken(CurlParser.SINGLE_QUOTED_STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CurlListener ) {
	        listener.enterString(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CurlListener ) {
	        listener.exitString(this);
		}
	}


}



class MethodContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CurlParser.RULE_method;
    }

	methodName() {
	    return this.getTypedRuleContext(MethodNameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CurlListener ) {
	        listener.enterMethod(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CurlListener ) {
	        listener.exitMethod(this);
		}
	}


}



class MethodNameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CurlParser.RULE_methodName;
    }

	string() {
	    return this.getTypedRuleContext(StringContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CurlListener ) {
	        listener.enterMethodName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CurlListener ) {
	        listener.exitMethodName(this);
		}
	}


}



class HeaderContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CurlParser.RULE_header;
    }

	headerValue() {
	    return this.getTypedRuleContext(HeaderValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CurlListener ) {
	        listener.enterHeader(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CurlListener ) {
	        listener.exitHeader(this);
		}
	}


}



class HeaderValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CurlParser.RULE_headerValue;
    }

	string() {
	    return this.getTypedRuleContext(StringContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CurlListener ) {
	        listener.enterHeaderValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CurlListener ) {
	        listener.exitHeaderValue(this);
		}
	}


}



class DataContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CurlParser.RULE_data;
    }

	string() {
	    return this.getTypedRuleContext(StringContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CurlListener ) {
	        listener.enterData(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CurlListener ) {
	        listener.exitData(this);
		}
	}


}



class OutputContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CurlParser.RULE_output;
    }

	STRING() {
	    return this.getToken(CurlParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CurlListener ) {
	        listener.enterOutput(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CurlListener ) {
	        listener.exitOutput(this);
		}
	}


}



class UserContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CurlParser.RULE_user;
    }

	STRING() {
	    return this.getToken(CurlParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CurlListener ) {
	        listener.enterUser(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CurlListener ) {
	        listener.exitUser(this);
		}
	}


}



class FormContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CurlParser.RULE_form;
    }

	STRING() {
	    return this.getToken(CurlParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CurlListener ) {
	        listener.enterForm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CurlListener ) {
	        listener.exitForm(this);
		}
	}


}




CurlParser.CurlCommandContext = CurlCommandContext; 
CurlParser.CurlOptionsContext = CurlOptionsContext; 
CurlParser.UriContext = UriContext; 
CurlParser.StringContext = StringContext; 
CurlParser.MethodContext = MethodContext; 
CurlParser.MethodNameContext = MethodNameContext; 
CurlParser.HeaderContext = HeaderContext; 
CurlParser.HeaderValueContext = HeaderValueContext; 
CurlParser.DataContext = DataContext; 
CurlParser.OutputContext = OutputContext; 
CurlParser.UserContext = UserContext; 
CurlParser.FormContext = FormContext; 

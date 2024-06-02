grammar Curl;

// Parsers

curlCommand: 'curl' curlOptions*;

curlOptions
    : uri
    | method
    | header
    | data
    | output
    | user
    | form
    ;

uri: string;

string
    : STRING
    | DOUBLE_QUOTED_STRING
    | SINGLE_QUOTED_STRING
    ;

method: ('-X'|'--request') methodName;
methodName: string;

header: ('-H'|'--header') headerValue;
headerValue: string;

data: ('-d'|'--data') string;

output: ('-o'|'--output') STRING;

user: ('-u'|'--user') STRING;

form: ('-F'|'--form') STRING;


// Lexers

STRING
    : (~["\\ ] | '\\' .)+
    ;

DOUBLE_QUOTED_STRING : '"' (~["\\] | '\\' .)* '"' ;
SINGLE_QUOTED_STRING : '\'' (~["\\] | '\\' .)* '\'' ;


// Whitespace and newlines
WS: [ \t\r\n]+ -> skip;
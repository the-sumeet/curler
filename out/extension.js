"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = __importStar(require("vscode"));
const path = __importStar(require("path"));
const CodelensProvider_js_1 = require("./CodelensProvider.js");
const fs_1 = __importDefault(require("fs"));
const child_process_1 = __importDefault(require("child_process"));
const parserDriver_js_1 = __importDefault(require("./parserDriver.js"));
// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
function activate(context) {
    const codelensProvider = new CodelensProvider_js_1.CodelensProvider();
    const collection = vscode.languages.createDiagnosticCollection('antlr');
    vscode.languages.registerCodeLensProvider("*", codelensProvider);
    let actionDisposable = vscode.commands.registerCommand('helloworld.codelensAction', (args) => {
        // The code you place here will be executed every time your command is executed
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            return;
        }
        if (editor.document.isUntitled) {
            vscode.window.showInformationMessage('Please save the file before executing this command');
            return;
        }
        const currentFileName = editor.document.fileName;
        child_process_1.default.exec(editor.document.getText(), (err, stdout, stderr) => {
            // This var contains the file written
            var fileWrittenPath;
            if (err) {
                fs_1.default.writeFileSync(currentFileName + ".err", stdout, 'utf-8');
                fileWrittenPath = currentFileName + ".err";
            }
            else {
                fs_1.default.writeFileSync(currentFileName + ".out", stdout, 'utf-8');
                fileWrittenPath = currentFileName + ".out";
            }
            const openPath = vscode.Uri.file(fileWrittenPath);
            vscode.workspace.openTextDocument(openPath).then(doc => {
                vscode.window.showTextDocument(doc);
            });
        });
        vscode.window.showInformationMessage(`Hello from codelens`);
    });
    context.subscriptions.push(actionDisposable);
    if (vscode.window.activeTextEditor) {
        updateDiagnostics(vscode.window.activeTextEditor.document, collection);
    }
    context.subscriptions.push(vscode.workspace.onDidChangeTextDocument(event => {
        if (vscode.window.activeTextEditor && vscode.window.activeTextEditor.document === event.document) {
            updateDiagnostics(event.document, collection);
        }
    }));
}
exports.activate = activate;
function updateDiagnostics(document, collection) {
    if (document && path.basename(document.uri.fsPath).endsWith('.curl.sh')) {
        const { result, errors } = (0, parserDriver_js_1.default)(document.getText());
        if (errors && errors.length > 0) {
            let diagnostics = [];
            errors.forEach((error) => {
                diagnostics.push({
                    // code: '',
                    message: errors[0].msg,
                    range: new vscode.Range(new vscode.Position(errors[0].line - 1, errors[0].column), new vscode.Position(errors[0].line - 1, errors[0].column)),
                    severity: vscode.DiagnosticSeverity.Error,
                    // source: '',
                    // relatedInformation: [
                    // 	new vscode.DiagnosticRelatedInformation(new vscode.Location(document.uri, new vscode.Range(new vscode.Position(1, 8), new vscode.Position(1, 9))), 'first assignment to `x`')
                    // ]
                });
            });
            collection.set(document.uri, diagnostics);
        }
        else {
            collection.clear();
        }
    }
    else {
        collection.clear();
    }
}
// This method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map
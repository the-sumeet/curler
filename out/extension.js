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
const vscode = __importStar(require("vscode"));
const CodelensProvider_js_1 = require("./CodelensProvider.js");
const fs_1 = __importDefault(require("fs"));
const child_process_1 = __importDefault(require("child_process"));
// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
function activate(context) {
    const codelensProvider = new CodelensProvider_js_1.CodelensProvider();
    vscode.languages.registerCodeLensProvider("*", codelensProvider);
    let actionDisposable = vscode.commands.registerCommand('curler.runCurl', (args) => {
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
            var fileWrittenPath = "";
            console.log("stdout: ");
            if (stderr !== null && stderr !== "") {
                fs_1.default.writeFileSync(currentFileName + ".err", stderr.toString(), 'utf-8');
                fileWrittenPath = currentFileName + ".err";
            }
            if (stdout !== null && stdout !== "") {
                fs_1.default.writeFileSync(currentFileName + ".out", stdout.toString(), 'utf-8');
                fileWrittenPath = currentFileName + ".out";
            }
            if (fileWrittenPath !== "") {
                const openPath = vscode.Uri.file(fileWrittenPath);
                vscode.workspace.openTextDocument(openPath).then(doc => {
                    vscode.window.showTextDocument(doc);
                });
            }
        });
    });
    context.subscriptions.push(actionDisposable);
}
exports.activate = activate;
// This method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map
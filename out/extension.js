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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = __importStar(require("vscode"));
const CodelensProvider_1 = require("./CodelensProvider");
// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
function activate(context) {
    const codelensProvider = new CodelensProvider_1.CodelensProvider();
    vscode.languages.registerCodeLensProvider("*", codelensProvider);
    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "helloworld" is now active!');
    // The command has been defined in the package.json file
    // Now provide the implementation of the command with registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand('helloworld.helloWorld', () => {
        // The code you place here will be executed every time your command is executed
        // Display a message box to the user
        vscode.window.showInformationMessage('Hello Sumeet from HelloWorld!');
    });
    context.subscriptions.push(disposable);
    let testDisposable = vscode.commands.registerCommand('helloworld.test', () => {
        // The code you place here will be executed every time your command is executed
        // Display a message box to the user
        vscode.window.showInformationMessage('Test');
    });
    context.subscriptions.push(testDisposable);
    let enableLensDisposable = vscode.commands.registerCommand('helloworld.enableCodeLens', () => {
        // The code you place here will be executed every time your command is executed
        // Display a message box to the user
        vscode.workspace.getConfiguration("sample").update("enableCodeLens", true, true);
    });
    context.subscriptions.push(enableLensDisposable);
    let disableLensDisposable = vscode.commands.registerCommand('helloworld.disableCodeLens', () => {
        // The code you place here will be executed every time your command is executed
        // Display a message box to the user
        vscode.workspace.getConfiguration("sample").update("enableCodeLens", false, true);
    });
    context.subscriptions.push(disableLensDisposable);
    let actionDisposable = vscode.commands.registerCommand('helloworld.codelensAction', () => {
        // The code you place here will be executed every time your command is executed
        // Display a message box to the user
        const cp = require('child_process');
        cp.exec('curl -XGET https://jsonplaceholder.typicode.com/todos', (err, stdout, stderr) => {
            console.log('stdout: ' + stdout);
            console.log('stderr: ' + stderr);
            if (err) {
                console.log('error: ' + err);
            }
        });
        vscode.window.showInformationMessage(`Hello from codelens`);
    });
    context.subscriptions.push(actionDisposable);
}
exports.activate = activate;
// This method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map
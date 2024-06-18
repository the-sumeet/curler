// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as path from 'path';
import { CodelensProvider } from './CodelensProvider.js';
import fs from 'fs';
import cp from 'child_process';
import parseCurlCommand from './parserDriver.js';


// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	const codelensProvider = new CodelensProvider();

	vscode.languages.registerCodeLensProvider("*", codelensProvider);

	let actionDisposable = vscode.commands.registerCommand('curler.runCurl', (args: any) => {
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
		cp.exec(editor.document.getText(), (err: any, stdout: string, stderr: string) => {

			// This var contains the file written
			var fileWrittenPath: string;

			if (err) {
				fs.writeFileSync(currentFileName + ".err", stdout, 'utf-8');
				fileWrittenPath = currentFileName + ".err";
			} else {
				fs.writeFileSync(currentFileName + ".out", stdout, 'utf-8');
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

}


// This method is called when your extension is deactivated
export function deactivate() { }

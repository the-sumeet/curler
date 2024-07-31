
import * as vscode from 'vscode';
import { CodelensProvider } from './CodelensProvider.js';
import fs from 'fs';
import cp from 'child_process';


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

			var fileWrittenPath: string = "";

			console.log("stdout: ");


			if (err !== null && err !== undefined) {
				fs.writeFileSync(currentFileName + ".err", err.toString(), 'utf-8');
				fileWrittenPath = currentFileName + ".err";
			}

			if (stdout !== null && stdout !== "") {
				fs.writeFileSync(currentFileName + ".out", stdout.toString(), 'utf-8');
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


// This method is called when your extension is deactivated
export function deactivate() { }

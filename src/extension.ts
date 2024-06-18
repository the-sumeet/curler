
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

			// This var contains the file written
			var fileWrittenPath: string;

			fs.writeFileSync(currentFileName + ".err", stderr.toString(), 'utf-8');
			fs.writeFileSync(currentFileName + ".out", stdout.toString(), 'utf-8');

			// eslint-disable-next-line eqeqeq
			if (stdout != null && stdout != "") {
				fileWrittenPath = currentFileName + ".out";
			} else {
				fileWrittenPath = currentFileName + ".err";
			}

			const openPath = vscode.Uri.file(fileWrittenPath);
			vscode.workspace.openTextDocument(openPath).then(doc => {
				vscode.window.showTextDocument(doc);
			});

		});
	});
	context.subscriptions.push(actionDisposable);

}


// This method is called when your extension is deactivated
export function deactivate() { }

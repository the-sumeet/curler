// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { CodelensProvider } from './CodelensProvider';
const fs = require('fs');
const cp = require('child_process')


// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	const codelensProvider = new CodelensProvider();

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

	let actionDisposable = vscode.commands.registerCommand('helloworld.codelensAction', (args: any) => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user

		// Get current filename
		const editor = vscode.window.activeTextEditor;
		if (!editor) {
			return;
		}
		if (editor.document.isUntitled) {
			vscode.window.showInformationMessage('Please save the file before executing this command');
			return;
		}



		const currentFileName = editor.document.fileName;
		cp.exec(editor.document.getText(), (err: string, stdout: string, stderr: string) => {

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

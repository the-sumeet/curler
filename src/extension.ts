// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { exec, ChildProcess } from 'child_process';
import { isCurlFile } from './utils';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	vscode.window.showInformationMessage('Curl Executor extension is now active.');
	vscode.commands.executeCommand('curlExecutor.toggleExecuteButton');

	let executeButton: vscode.StatusBarItem;
	let cancelButton: vscode.StatusBarItem;
	let curlProcess: ChildProcess | null = null;

	// Create the execute button
	executeButton = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 100);
	executeButton.text = "$(play) Execute Curl";
	executeButton.tooltip = "Execute this file via bash";
	executeButton.command = 'curlExecutor.executeCurl';

	// Create the cancel button
	cancelButton = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 99);
	cancelButton.text = "$(close) Cancel";
	cancelButton.tooltip = "Cancel the ongoing bash process";
	cancelButton.command = 'curlExecutor.cancelCurl';
	cancelButton.hide();

	// vscode.window.onDidChangeActiveTextEditor(editor => {
	// 	if (!editor) {
	// 		return;
	// 	}
	// 	vscode.commands.executeCommand('curlExecutor.toggleExecuteButton')
	// });

	const disposableToggleExecuteButton = vscode.commands.registerCommand('curlExecutor.toggleExecuteButton', () => {

		const editor = vscode.window.activeTextEditor;
		if (!editor) {
			return;
		}

		const document = editor.document;
		const fileContent = document.getText();

		if (curlProcess) {
			cancelButton.show();
			executeButton.hide();
		} else {
			cancelButton.hide();

			if (isCurlFile(fileContent)) {
				executeButton.show();
			} else {
				executeButton.hide();
			}
		}
	});
	context.subscriptions.push(disposableToggleExecuteButton);

	const disposableCurler = vscode.commands.registerCommand('curlExecutor.executeCurl', async () => {

		// We're here means the file is a curl file.

		const editor = vscode.window.activeTextEditor;
		if (!editor) {
			vscode.window.showErrorMessage('No active editor found.');
			return;
		}

		const document = editor.document;
		const fileContent = document.getText();
		if (!isCurlFile(fileContent)) {
			vscode.window.showErrorMessage('The file does not contain a curl command.');
			return;
		}


		// Execute the curl command
		curlProcess = exec(fileContent, (error, stdout, stderr) => {
			if (error) {
				vscode.window.showErrorMessage(`Error executing curl command: ${stderr}`);
				return;
			}

			const languageId = detectLanguageMode(stdout);

			// Open a new tab and display the output
			vscode.workspace.openTextDocument({ content: stdout }).then(doc => {
				vscode.window.showTextDocument(doc).then(editor => {
					// Set the language mode of the document
					vscode.languages.setTextDocumentLanguage(doc, languageId);
				});
			});
		});


		// Hide the execute button and show the cancel button
		// executeButton.hide();
		vscode.commands.executeCommand('curlExecutor.toggleExecuteButton');

		curlProcess.on('exit', () => {
			curlProcess = null;
			vscode.commands.executeCommand('curlExecutor.toggleExecuteButton');
		});


		vscode.window.onDidChangeActiveTextEditor(editor => {
			vscode.commands.executeCommand('curlExecutor.toggleExecuteButton');
		});

		// Add the buttons to the subscriptions
		context.subscriptions.push(executeButton, cancelButton, disposableCurler, cancelDisposable);
	});
	context.subscriptions.push(disposableCurler);

	let cancelDisposable = vscode.commands.registerCommand('curlExecutor.cancelCurl', () => {
		if (curlProcess) {
			// Kill the curl process
			curlProcess.kill();
			curlProcess = null;

			vscode.commands.executeCommand('curlExecutor.toggleExecuteButton');
		}
	});
	context.subscriptions.push(cancelDisposable);

}


// This method is called when your extension is deactivated
export function deactivate() { 
	console.log('Curl Executor extension is now deactivated.');
	vscode.window.showInformationMessage('Curl Executor extension is now deactivated.');
}

// Function to detect the language mode based on the response content
function detectLanguageMode(content: string): string {

	// Check if the content is JSON
	if (content.includes("application/json")) {
		return 'json';
	}
	try {
		JSON.parse(content);
		return 'json';
	} catch (e) {
		// Not JSON
	}

	// Check if the content is HTML
	if (content.includes("text/html")) {
		return 'html';
	}
	if (content.trim().startsWith('<') && content.includes('</html>')) {
		return 'html';
	}

	// Check if the content is XML
	if (content.includes("application/xml")) {
		return 'xml';
	}
	if (content.trim().startsWith('<') && content.includes('</')) {
		return 'xml';
	}

	// Default to plain text
	return 'plaintext';
}


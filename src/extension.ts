import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand('sql-test.pickConnection', () => {
		vscode.window.showQuickPick([
			"Standalone",
			"SQL DB",
			"Managed Instance",
			"Big Data Cluster"
		], {
			canPickMany: true
		}).then(pickedValues => {

		});
	});

	context.subscriptions.push(disposable);
}

export function deactivate() { }

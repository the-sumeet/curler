


// Function to check if the file content starts with a curl command
export function isCurlFile(content: string): boolean {
	return content.trim().startsWith('curl');
}
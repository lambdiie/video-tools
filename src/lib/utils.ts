export { cn } from "cn";

// Gets the file's name from a file object with the extension removed
export function getFileName(file: File) {
	const fileName = file.name;
	const extensionIndex = fileName.lastIndexOf(".");
	if (extensionIndex < 0) return fileName;
	return fileName.substring(0, extensionIndex);
}

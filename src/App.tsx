import { useState } from "react";
import VideoEdit from "@/components/video/VideoEdit";
import VideoInput from "@/components/video/VideoInput";

function App() {
	const [inputValue, setInputValue] = useState("");
	const [file, setFile] = useState<File | null>(null);

	const handleInput = (file: File | undefined) => {
		if (file) {
			// Create a local object URL for the uploaded file
			const url = URL.createObjectURL(file);
			setInputValue(url);
			setFile(file);
		}
	};

	return (
		<main className="flex flex-col items-center">
			<h1 className="text-center m-16 text-2xl">lambdiie's video tools</h1>
			{inputValue && file ? (
				<VideoEdit file={file} src={inputValue} />
			) : (
				<VideoInput handleInput={handleInput} />
			)}
		</main>
	);
}

export default App;

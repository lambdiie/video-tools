import { useState } from "react";

import VideoInput from "@/components/VideoInput";
import VideoPlayer from "@/components/VideoPlayer";

function App() {
	const [inputValue, setInputValue] = useState("");

	const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		if (file) {
			// Create a local object URL for the uploaded file
			const url = URL.createObjectURL(file);
			setInputValue(url);
		}
	};

	return (
		<main className="flex flex-col items-center">
			<h1 className="text-center m-16 text-2xl">lambdiie's video tools</h1>
			{inputValue ? (
				<VideoPlayer src={inputValue} />
			) : (
				<VideoInput handleInput={handleInput} />
			)}
		</main>
	);
}

export default App;

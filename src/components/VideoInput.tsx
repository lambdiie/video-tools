import { CloudUpload } from "lucide-react";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

export default function VideoInput({ handleInput }) {
	const inputRef = useRef<HTMLInputElement>(null);

	return (
		<button
			type="button"
			onClick={() => inputRef.current?.click()}
			className="flex flex-col justify-center items-center w-3xl aspect-video border-2 border-dashed border-blue-500 rounded-md"
		>
			<CloudUpload className="size-24" color="blue" strokeWidth={1} />
			<Button variant="outline" className="mb-4">Choose a File</Button>
			<h1>or drag & drop files to start</h1>
			<p className="text-sm text-gray-600">Supported Formats: idk yet</p>
			<input
				type="file"
				id="video-upload"
				name="video-upload"
				accept="video/*"
				onChange={handleInput}
				hidden
				ref={inputRef}
			></input>
		</button>
	);
}

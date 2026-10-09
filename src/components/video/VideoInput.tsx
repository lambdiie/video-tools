import { CloudUpload } from "lucide-react";
import { useRef } from "react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function VideoInput({
	handleInput,
}: {
	handleInput: (file: File | undefined) => void;
}) {
	const inputRef = useRef<HTMLInputElement>(null);

	return (
		<button
			type="button"
			onClick={() => inputRef.current?.click()}
			onDragOver={(e) => {
				e.preventDefault();
			}}
			onDrop={(e) => {
				e.preventDefault();
				handleInput(e.dataTransfer.files[0]);
			}}
			className="flex flex-col justify-center items-center w-3xl aspect-video border-2 border-dashed border-blue-700 rounded-md hover:bg-gray-50"
		>
			<CloudUpload
				className="size-24 bg-gray-200 rounded-full p-4 text-blue-700"
				strokeWidth={1}
			/>
			<span
				className={cn(
					buttonVariants({ size: "lg" }),
					"focus-visible:ring-2 p-4 m-4 rounded-full hover:cursor-pointer",
				)}
			>
				Choose a File
			</span>
			<h1>or drag & drop files to start</h1>
			<p className="text-sm text-gray-600">
				Supported formats: mp4, mkv, mov, webm
			</p>
			<input
				type="file"
				id="video-upload"
				name="video-upload"
				accept="video/*"
				onChange={(e) => handleInput(e.target.files?.[0])}
				hidden
				ref={inputRef}
			></input>
		</button>
	);
}

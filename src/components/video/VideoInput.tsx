import { CloudUpload } from "lucide-react";
import { useRef, useState } from "react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function VideoInput({
	handleInput,
}: {
	handleInput: (file: File | undefined) => void;
}) {
	const inputRef = useRef<HTMLInputElement>(null);
	const [dragging, setDragging] = useState(false);

	return (
		<button
			type="button"
			onClick={() => inputRef.current?.click()}
			onDragOver={(e) => {
				e.preventDefault();
				setDragging(true);
			}}
			onDragLeave={() => setDragging(false)}
			onDrop={(e) => {
				e.preventDefault();
				setDragging(false);
				handleInput(e.dataTransfer.files[0]);
			}}
			className={cn(
				"group flex flex-col justify-center items-center w-3xl aspect-video border-2 border-dashed border-blue-700 rounded-md *:pointer-events-none",
				dragging && "bg-gray-100",
			)}
		>
			<CloudUpload
				className="size-24 bg-gray-200 rounded-full p-4 text-blue-700"
				strokeWidth={1}
			/>
			<span
				className={cn(
					buttonVariants({ variant: "outline" }),
					"pointer-events-none group-hover:bg-accent group-focus-visible:ring-2 m-4",
				)}
			>
				Choose a File
			</span>
			<h1>or drag & drop files to start</h1>
			<p className="text-sm text-gray-600">
				Supported formats: mp4, mkv, mov, webm, ogg
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

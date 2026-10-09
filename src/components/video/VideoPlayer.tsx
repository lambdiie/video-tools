import { useFileStore } from "@/store/store";

export default function VideoPlayer() {
	const src = useFileStore((state) => state.src);
	return (
		<div className="h-full flex justify-center items-center">
			<video controls src={src} className="w-3xl" />
		</div>
	);
}

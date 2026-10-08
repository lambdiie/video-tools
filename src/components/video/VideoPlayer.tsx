import { useFileStore } from "@/store/store";

export default function VideoPlayer() {
	const src = useFileStore((state) => state.src);
	return <>{src ? <video controls src={src} className="w-3xl" /> : null}</>;
}

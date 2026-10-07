import ExportForm from "@/components/export/ExportForm";
import VideoPlayer from "@/components/video/VideoPlayer";

export default function VideoEdit({ file, src }: { file: File, src: string }) {
	return (
		<div className="flex justify-center gap-4">
			<VideoPlayer src={src} />
			<ExportForm file={file} />
		</div>
	);
}

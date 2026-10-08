import ExportForm from "@/components/export/ExportForm";
import VideoPlayer from "@/components/video/VideoPlayer";

export default function VideoEdit() {
	return (
		<div className="flex justify-center gap-4">
			<VideoPlayer />
			<ExportForm />
		</div>
	);
}

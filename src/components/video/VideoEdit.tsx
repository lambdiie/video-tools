import ExportSidebar from "@/components/export/ExportSidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import VideoPlayer from "@/components/video/VideoPlayer";

export default function VideoEdit() {
	return (
		<SidebarProvider className="flex justify-center">
			<SidebarInset>
				<VideoPlayer />
			</SidebarInset>
			<ExportSidebar />
		</SidebarProvider>
	);
}

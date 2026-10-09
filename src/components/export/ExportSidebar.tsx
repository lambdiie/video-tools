import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import type z from "zod";
import ConvertForm from "@/components/export/ConvertForm";
import { Button } from "@/components/ui/button";
import {
	Progress,
	ProgressLabel,
	ProgressValue,
} from "@/components/ui/progress";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarHeader,
} from "@/components/ui/sidebar";
import { processVideo } from "@/export/processVideo";
import { exportSchema, videoFormats } from "@/export/schema";
import { useFileStore } from "@/store/store";

export default function ExportSidebar() {
	const [progress, setProgress] = useState(0);
	const [inProgress, setInProgress] = useState(false);

	const file = useFileStore((state) => state.file);
	const form = useForm<z.infer<typeof exportSchema>>({
		resolver: zodResolver(exportSchema),
		defaultValues: {
			format: videoFormats[0].format,
		},
	});

	async function onSubmit(data: z.infer<typeof exportSchema>) {
		setInProgress(true);
		await processVideo(file, data, setProgress);
		setInProgress(false);
	}

	return (
		<Sidebar side="right" collapsible="none">
			<SidebarHeader>
				<h1>lambdiie's video tools</h1>
			</SidebarHeader>
			<SidebarContent>
				<FormProvider {...form}>
					<form id="export-form" onSubmit={form.handleSubmit(onSubmit)}>
						<SidebarGroup>
							<ConvertForm />
						</SidebarGroup>
					</form>
				</FormProvider>
			</SidebarContent>
			<SidebarFooter>
				{inProgress && (
					<Progress value={progress}>
						<ProgressLabel>Exporting: </ProgressLabel>
						<ProgressValue />
					</Progress>
				)}
				<Button type="submit" form="export-form">
					Export
				</Button>
			</SidebarFooter>
		</Sidebar>
	);
}

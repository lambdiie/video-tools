import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import type z from "zod";
import SidebarCollapsible from "@/components/components/SidebarCollapsible";
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
	SidebarHeader,
} from "@/components/ui/sidebar";
import { processVideo } from "@/export/processVideo";
import { defaultSchemaValues, exportSchema } from "@/export/schema";
import { useFileStore } from "@/store/store";

export default function ExportSidebar() {
	const [progress, setProgress] = useState(0);
	const [inProgress, setInProgress] = useState(false);

	const file = useFileStore((state) => state.file);
	const form = useForm<z.infer<typeof exportSchema>>({
		resolver: zodResolver(exportSchema),
		defaultValues: defaultSchemaValues,
	});

	async function onSubmit(data: z.infer<typeof exportSchema>) {
		setInProgress(true);
		await processVideo(file, data, setProgress);
		setInProgress(false);
	}

	return (
		<Sidebar side="right" collapsible="none" className="p-2">
			<SidebarHeader>
				<h1>lambdiie's video tools</h1>
			</SidebarHeader>
			<SidebarContent>
				<FormProvider {...form}>
					<form
						id="export-form"
						onSubmit={form.handleSubmit(onSubmit, (errors) =>
							console.log(errors),
						)}
					>
						<SidebarCollapsible header="Convert" defaultOpen>
							<ConvertForm />
						</SidebarCollapsible>
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

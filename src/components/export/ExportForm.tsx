import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import type z from "zod";
import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import {
	Progress,
	ProgressLabel,
	ProgressValue,
} from "@/components/ui/progress";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { processVideo } from "@/export/processVideo";
import { exportSchema, videoFormats } from "@/export/schema";
import { useFileStore } from "@/store/store";

export default function ExportForm() {
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
		<div className="w-md flex justify-center items-center">
			<form id="export-form" onSubmit={form.handleSubmit(onSubmit)}>
				<Controller
					name="format"
					control={form.control}
					render={({ field }) => (
						<Field className="w-20">
							<FieldLabel>Format</FieldLabel>
							<Select value={field.value} onValueChange={field.onChange}>
								<SelectTrigger className="hover:bg-gray-100">
									<SelectValue />
								</SelectTrigger>
								<SelectContent>
									<SelectGroup>
										{videoFormats.map((format) => (
											<SelectItem key={format.format} value={format.format}>
												{format.format}
											</SelectItem>
										))}
									</SelectGroup>
								</SelectContent>
							</Select>
						</Field>
					)}
				/>
			</form>
			{inProgress && (
				<Progress value={progress}>
					<ProgressLabel>Exporting: </ProgressLabel>
					<ProgressValue />
				</Progress>
			)}
			<Button type="submit" form="export-form">
				Export
			</Button>
		</div>
	);
}

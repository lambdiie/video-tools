import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import type z from "zod";
import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { exportSchema, videoFormats } from "@/export/schema";
import { processVideo } from "@/export/processVideo";

export default function ExportForm({ file }: { file: File }) {
	const form = useForm<z.infer<typeof exportSchema>>({
		resolver: zodResolver(exportSchema),
		defaultValues: {
			format: videoFormats[0].format,
		},
	});

	function onSubmit(data: z.infer<typeof exportSchema>) {
		processVideo(file, data);
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
			<Button type="submit" form="export-form">
				Export
			</Button>
		</div>
	);
}

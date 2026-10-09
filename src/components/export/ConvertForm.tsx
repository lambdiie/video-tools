import { Controller, useFormContext } from "react-hook-form";
import { Field, FieldLabel } from "@/components/ui/field";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { videoFormats } from "@/export/schema";

export default function ConvertForm() {
	const { control } = useFormContext();

	return (
		<Controller
			name="format"
			control={control}
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
	);
}

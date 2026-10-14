import { Controller, useFormContext } from "react-hook-form";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
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
		<FieldGroup className="grid grid-cols-3">
			<Controller
				name="name"
				control={control}
				render={({ field }) => (
					<Field className="col-span-2">
						<FieldLabel htmlFor="form-file-name">File Name</FieldLabel>
						<Input {...field} placeholder="Output" id="form-file-name" />
					</Field>
				)}
			/>
			<Controller
				name="format"
				control={control}
				render={({ field }) => (
					<Field>
						<FieldLabel htmlFor="form-file-format">Format</FieldLabel>
						<Select
							value={field.value}
							onValueChange={field.onChange}
							id="form-file-format"
						>
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
		</FieldGroup>
	);
}

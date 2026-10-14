import { Controller, useFormContext } from "react-hook-form";
import { Field, FieldLabel } from "@/components/ui/field";

export default function ConvertForm() {
	const { control } = useFormContext();

	return (
		<Controller
			name="format"
			control={control}
			render={({ field }) => (
				<Field className="w-20">
					<FieldLabel>Format</FieldLabel>
				</Field>
			)}
		/>
	);
}

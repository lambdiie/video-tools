import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const items = [
	{ label: "MP4", value: "mp4" },
	{ label: "MOV", value: "mov" },
	{ label: "MKV", value: "mkv" },
];

export default function ExportForm() {
	return (
		<div className="w-md flex justify-center items-center">
			<Select items={items}>
				<SelectTrigger className="w-20">
					<SelectValue placeholder="Type" />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						{items.map((item) => (
							<SelectItem key={item.value} value={item.value}>
								{item.label}
							</SelectItem>
						))}
					</SelectGroup>
				</SelectContent>
			</Select>
		</div>
	);
}

import { ChevronDown } from "lucide-react";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { SidebarGroup, SidebarGroupLabel } from "@/components/ui/sidebar";

export default function SidebarCollapsible({
	defaultOpen = false,
	header = "",
	children,
}: {
	defaultOpen?: boolean;
	header?: string;
	children: React.ReactNode;
}) {
	return (
		<Collapsible defaultOpen={defaultOpen} className="group/collapsible">
			<SidebarGroup>
				<SidebarGroupLabel
					render={
						<CollapsibleTrigger className="cursor-pointer hover:bg-gray-100 p-2" />
					}
				>
					<h1 className="text-sm font-bold">{header}</h1>
					<ChevronDown className="ml-auto transition-transform group-data-open/collapsible:rotate-180" />
				</SidebarGroupLabel>
				<hr className="border-[primary] border" />
				<CollapsibleContent className="p-2">{children}</CollapsibleContent>
			</SidebarGroup>
		</Collapsible>
	);
}

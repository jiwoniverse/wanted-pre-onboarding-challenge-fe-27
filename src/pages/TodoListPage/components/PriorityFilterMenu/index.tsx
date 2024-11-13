import { useState } from "react";

import { priorityOptions } from "@/constants/todo";

import { priorityType } from "@/types/todo";

import {
	MenuContent,
	MenuRadioItem,
	MenuRadioItemGroup,
	MenuRoot,
	MenuTrigger,
} from "@/components/ui/menu";
import { Button } from "@/components/ui/button";
import { FaFilter } from "react-icons/fa";

interface PriorityFilterMenuProps {
	onFilterChange: (priority: priorityType) => void;
}

const PriorityFilterMenu = ({ onFilterChange }: PriorityFilterMenuProps) => {
	const [priority, setPriority] = useState("");

	const handleValueChange = (newPriority: priorityType) => {
		setPriority(newPriority);
		onFilterChange(newPriority);
	};

	return (
		<MenuRoot size="md">
			<MenuTrigger asChild>
				<Button
					variant="ghost"
					backgroundColor={priority && "#e6e6e6"}
					size="sm"
					paddingX={2}
					paddingY={1}
					focusRing="none"
				>
					<FaFilter color="#616161" />
				</Button>
			</MenuTrigger>
			<MenuContent minW="10rem">
				<MenuRadioItemGroup
					value={priority}
					onValueChange={(e) => handleValueChange(e.value as priorityType)}
				>
					<MenuRadioItem key="전체" value="" cursor="pointer">
						전체
					</MenuRadioItem>
					{priorityOptions.map((option) => (
						<MenuRadioItem key={option.value} value={option.value} cursor="pointer">
							{option.label}
						</MenuRadioItem>
					))}
				</MenuRadioItemGroup>
			</MenuContent>
		</MenuRoot>
	);
};

export default PriorityFilterMenu;

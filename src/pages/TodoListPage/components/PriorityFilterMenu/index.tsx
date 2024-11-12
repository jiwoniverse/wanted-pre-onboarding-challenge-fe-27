import { useState } from "react";
import {
	MenuContent,
	MenuRadioItem,
	MenuRadioItemGroup,
	MenuRoot,
	MenuTrigger,
} from "@/components/ui/menu";
import { Button } from "@/components/ui/button";

import { priorityOptions } from "@/constants/todo";

import { HiSortAscending } from "react-icons/hi";

import { priorityType } from "@/types/todo";

interface PriorityFilterMenuProps {
	onFilterChange: (priority: priorityType) => void;
}

const PriorityFilterMenu = ({ onFilterChange }: PriorityFilterMenuProps) => {
	const [value, setValue] = useState("");

	const handleValueChange = (newValue: priorityType) => {
		setValue(newValue);
		onFilterChange(newValue);
	};

	return (
		<MenuRoot>
			<MenuTrigger asChild>
				<Button variant="outline" size="sm" paddingX={2} paddingY={1} focusRing="none">
					<HiSortAscending /> 우선순위
				</Button>
			</MenuTrigger>
			<MenuContent minW="10rem">
				<MenuRadioItemGroup
					value={value}
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

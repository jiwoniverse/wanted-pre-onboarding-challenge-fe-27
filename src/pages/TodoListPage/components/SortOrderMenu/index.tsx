import {
	SelectRoot,
	SelectTrigger,
	SelectValueText,
	SelectContent,
	SelectItem,
} from "@/components/ui/select";
import { HStack } from "@chakra-ui/react";

import { sortOptions, orderOptions } from "@/constants/todo";
import { useState } from "react";
import { ValueChangeDetails } from "node_modules/@chakra-ui/react/dist/types/components/accordion/namespace";

// import { HiSortAscending } from "react-icons/hi";

interface SortOrderMenuProps {
	onSortChange: (sort: string[]) => void;
	onOrderChange: (order: string[]) => void;
}

const SortOrderMenu = ({ onSortChange, onOrderChange }: SortOrderMenuProps) => {
	const [sort, setSort] = useState<string[]>([]);
	const [order, setOrder] = useState<string[]>([]);

	const handleSortChange = (e: ValueChangeDetails) => {
		setSort(e.value);
		onSortChange(e.value);
		setOrder([]);
		onOrderChange([]);
	};

	const handleOrderChange = (e: ValueChangeDetails) => {
		setOrder(e.value);
		onOrderChange(e.value);
	};

	return (
		<HStack width="100%" maxWidth="300px">
			<SelectRoot collection={sortOptions} value={sort} onValueChange={handleSortChange} size="sm">
				<SelectTrigger clearable cursor="pointer">
					<SelectValueText placeholder="정렬 기준" />
				</SelectTrigger>
				<SelectContent>
					{sortOptions.items.map((option) => (
						<SelectItem item={option} key={option.value} cursor="pointer">
							{option.label}
						</SelectItem>
					))}
				</SelectContent>
			</SelectRoot>

			<SelectRoot
				collection={orderOptions}
				value={order}
				onValueChange={handleOrderChange}
				disabled={!sort.length}
				size="sm"
			>
				<SelectTrigger clearable cursor="pointer">
					<SelectValueText placeholder="정렬 순서" />
				</SelectTrigger>
				<SelectContent>
					{orderOptions.items.map((option) => (
						<SelectItem item={option} key={option.value} cursor="pointer">
							{option.label}
						</SelectItem>
					))}
				</SelectContent>
			</SelectRoot>
		</HStack>
	);
};

export default SortOrderMenu;

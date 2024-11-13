import { useState } from "react";
import { Outlet } from "react-router-dom";

import { useQueryStrings } from "@/hooks/useQueryStrings";
import { useGetTodos } from "@/hooks/apis/useGetTodos";
import { useSearchKeyword } from "@/hooks/useSearchKeyword";

import SearchInput from "./components/SearchInput";
import PriorityFilterMenu from "./components/PriorityFilterMenu";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";

import { OrderType, priorityFilterType, SortType } from "@/types/apis";

import { VStack, Box, HStack, Flex } from "@chakra-ui/react";

const TodoListPage = () => {
	const { getParams, setParams } = useQueryStrings();
	const { priorityFilter, sort, order } = getParams() as {
		priorityFilter?: priorityFilterType;
		sort?: SortType;
		order?: OrderType;
	};
	const { register, debouncedKeyword } = useSearchKeyword();
	const [currentSort, setCurrentSort] = useState<SortType | undefined>(sort);
	const [currentOrder, setCurrentOrder] = useState<OrderType | undefined>(order);

	const handlePriorityChange = (newPriority: priorityFilterType) => {
		setParams({ priorityFilter: newPriority });
	};

	const handleSortChange = (sortKey: SortType) => {
		const newOrder = currentSort === sortKey && currentOrder === "asc" ? "desc" : "asc";
		setCurrentSort(sortKey);
		setCurrentOrder(newOrder);
		setParams({ sort: sortKey, order: newOrder });
	};

	const { todos } = useGetTodos({
		priorityFilter,
		sort: currentSort,
		order: currentOrder,
		keyword: debouncedKeyword,
	});

	return (
		<VStack
			gapY={10}
			alignItems="center"
			justifyContent="center"
			maxWidth="600px"
			width="100%"
			flex={1}
			flexGrow={1}
		>
			<Box width="100%" paddingY={2} display="flex" alignItems="center" justifyContent="flex-start">
				<Flex direction="column" width="100%">
					<AddTodoForm />
				</Flex>
			</Box>

			<VStack gap={4} maxWidth="600px" width="100%" flex={1} flexGrow={1}>
				<HStack width="100%">
					<SearchInput register={register("keyword")} />
				</HStack>
				<HStack width="100%" alignSelf="start" justifyContent="space-between">
					<PriorityFilterMenu onFilterChange={handlePriorityChange} />
				</HStack>
				<Box width="100%">
					<TodoList todos={todos} onSortChange={handleSortChange} order={currentOrder} />
				</Box>
				<Box width="100%">
					<Outlet />
				</Box>
			</VStack>
		</VStack>
	);
};

export default TodoListPage;

import { useEffect } from "react";
import { Outlet, useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";

import { useDebounce } from "@/hooks/useDebounce";
import { useGetTodos } from "@/hooks/queries/useGetTodos";

import PriorityFilterMenu from "./components/PriorityFilterMenu";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import { Flex, Box, VStack, Input } from "@chakra-ui/react";

import { GetTodosParams } from "@/types/apis";
import { priorityType } from "@/types/todo";

const TodoListPage = () => {
	const { register, watch } = useForm<{ keyword: string }>();
	const keyword = watch("keyword");
	const debouncedKeyword = useDebounce(keyword, 500);

	const [searchParams, setSearchParams] = useSearchParams();

	useEffect(() => {
		if (debouncedKeyword) {
			searchParams.set("keyword", debouncedKeyword);
		} else {
			searchParams.delete("keyword");
		}
		setSearchParams(searchParams);
	}, [debouncedKeyword, setSearchParams, searchParams]);

	const handlePriorityChange = (priority: priorityType) => {
		if (priority) {
			searchParams.set("priority", priority);
		} else {
			searchParams.delete("priority");
		}
		setSearchParams(searchParams);
	};

	const params: GetTodosParams = {
		keyword: debouncedKeyword,
		priorityFilter: searchParams.get("priority") as "urgent" | "normal" | "low" | undefined,
	};

	const { todos } = useGetTodos(params);

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
				<Box width="100%">
					<Input
						{...register("keyword")}
						placeholder="검색어를 입력하세요"
						autoComplete="off"
						variant="flushed"
					/>
				</Box>
				<Box width="100%" alignSelf="start">
					<PriorityFilterMenu onFilterChange={handlePriorityChange} />
				</Box>
				<Box width="100%">
					<TodoList todos={todos} />
				</Box>
				<Box width="100%">
					<Outlet />
				</Box>
			</VStack>
		</VStack>
	);
};

export default TodoListPage;

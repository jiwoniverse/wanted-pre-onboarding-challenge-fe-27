import { Outlet } from "react-router-dom";

import { useGetTodos } from "@/shared/hooks/queries/useGetTodos";

import TodoList from "./components/TodoList";
import { Flex, Box, VStack } from "@chakra-ui/react";
import AddTodoForm from "./components/AddTodoForm";

const TodoListPage = () => {
	const { todos } = useGetTodos();

	return (
		<Flex
			direction="column"
			gapY={10}
			alignItems="center"
			justifyContent="center"
			maxWidth="800px"
			width="100%"
			flex={1}
			flexGrow={1}
		>
			<Box width="100%" paddingY={2} display="flex" alignItems="center" justifyContent="flex-start">
				<Flex direction="column" width="50%">
					<AddTodoForm />
				</Flex>
			</Box>
			<VStack gap={4} maxWidth="800px" width="100%" flex={1} flexGrow={1}>
				<Box width="100%">
					<TodoList todos={todos} />
				</Box>
				<Box width="100%">
					<Outlet />
				</Box>
			</VStack>
		</Flex>
	);
};

export default TodoListPage;

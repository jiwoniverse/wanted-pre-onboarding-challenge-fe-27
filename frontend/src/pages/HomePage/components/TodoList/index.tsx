import { TodoItemType } from "@/shared/types";

import { Box, Text } from "@chakra-ui/react";

interface TodoListProps {
	todos: TodoItemType[] | null;
}

const TodoList = ({ todos }: TodoListProps) => {
	return (
		<Box width="100%">
			{todos && todos.length ? (
				todos.map((todo) => <li key={todo.id}>{todo.title}</li>)
			) : (
				<Text textStyle="sm">등록된 할 일이 없습니다. 할 일을 추가해주세요.</Text>
			)}
		</Box>
	);
};

export default TodoList;

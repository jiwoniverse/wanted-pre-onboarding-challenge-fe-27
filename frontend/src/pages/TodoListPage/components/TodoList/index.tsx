import { useNavigate, useParams } from "react-router-dom";

import { TodoItemType } from "@/shared/types";

import { Box, Text, Table } from "@chakra-ui/react";

interface TodoListProps {
	todos: TodoItemType[];
}

const TodoList = ({ todos }: TodoListProps) => {
	const { id } = useParams();
	const navigate = useNavigate();

	return (
		<Box width="100%">
			<Table.Root size="md" showColumnBorder width="100%">
				<Table.Header>
					<Table.Row bg="bg.subtle">
						<Table.ColumnHeader fontWeight="semibold">할 일 목록</Table.ColumnHeader>
					</Table.Row>
				</Table.Header>
				<Table.Body>
					{todos && todos.length ? (
						todos.map((todo) => (
							<Table.Row
								key={todo.id}
								onClick={() => navigate(`/todo/${todo.id}`)}
								cursor="pointer"
								_hover={{ backgroundColor: "#eeeeee" }}
								transition="all 0.2s ease"
								bg={id === todo.id ? "#e2efff" : "transparent"}
							>
								<Table.Cell>{todo.title}</Table.Cell>
							</Table.Row>
						))
					) : (
						<Table.Row>
							<Table.Cell>
								<Text textStyle="sm">등록된 할 일이 없습니다. 할 일을 추가해주세요.</Text>
							</Table.Cell>
						</Table.Row>
					)}
				</Table.Body>
			</Table.Root>
		</Box>
	);
};

export default TodoList;

import { TodoItemType } from "@/shared/types";

import { Box, Text, Table } from "@chakra-ui/react";

interface TodoListProps {
	todos: TodoItemType[] | null;
	onSelect: (id: string) => void;
	selectedId?: string;
}

const TodoList = ({ todos, onSelect, selectedId }: TodoListProps) => {
	return (
		<Box width="100%">
			<Table.Root size="md" showColumnBorder width="100%">
				<Table.Header>
					<Table.Row bg="bg.subtle">
						<Table.ColumnHeader>목록</Table.ColumnHeader>
					</Table.Row>
				</Table.Header>
				<Table.Body>
					{todos && todos.length ? (
						todos.map((todo) => (
							<Table.Row
								key={todo.id}
								onClick={() => onSelect(todo.id)}
								cursor="pointer"
								_hover={{ backgroundColor: "#e7e7e7" }}
								transition="all 0.2s ease"
								bg={selectedId === todo.id ? "#e2efff" : "transparent"}
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

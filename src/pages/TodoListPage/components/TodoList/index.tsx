import { useNavigate, useParams } from "react-router-dom";
import { TodoItemType } from "@/types/todo";
import { Box, Text, Table } from "@chakra-ui/react";
import { activeRowBgColor, inactiveRowBgColor, subtleBgColor } from "./styles";
import { priorityOptions } from "@/constants/todo";

interface TodoListProps {
	todos: TodoItemType[];
}

const TodoList = ({ todos }: TodoListProps) => {
	const { id } = useParams();
	const navigate = useNavigate();

	const getTodoLabel = (todo: TodoItemType) => {
		return priorityOptions.find((option) => option.value === todo.priority)?.label;
	};

	return (
		<Box width="100%">
			<Table.Root size="md" width="100%" interactive>
				<Table.Header>
					<Table.Row bg={subtleBgColor}>
						<Table.ColumnHeader width="15%" />
						<Table.ColumnHeader fontWeight="semibold">목록</Table.ColumnHeader>
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
								bg={id === todo.id ? activeRowBgColor : inactiveRowBgColor}
							>
								<Table.Cell width="15%" textAlign="center">
									{getTodoLabel(todo)}
								</Table.Cell>
								<Table.Cell>{todo.title}</Table.Cell>
							</Table.Row>
						))
					) : (
						<Table.Row>
							<Table.Cell />
							<Table.Cell>
								<Text textStyle="sm">할 일이 없어요! 🥲</Text>
							</Table.Cell>
						</Table.Row>
					)}
				</Table.Body>
			</Table.Root>
		</Box>
	);
};

export default TodoList;

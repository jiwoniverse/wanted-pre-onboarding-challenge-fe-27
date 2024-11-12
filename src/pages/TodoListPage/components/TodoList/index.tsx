import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { priorityOptions } from "@/constants/todo";
import { TodoItemType } from "@/types/todo";

import { Box, Text, Table } from "@chakra-ui/react";
import { subtleBgColor, todoRowStyles, boxStyles, tableRootStyles } from "./styles";
import dayjs from "dayjs";

interface TodoListProps {
	todos: TodoItemType[];
}

const TodoList = ({ todos }: TodoListProps) => {
	const { todoId } = useParams();
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();

	const getTodoLabel = (todo: TodoItemType) => {
		return priorityOptions.find((option) => option.value === todo.priority)?.label;
	};

	const handleTodoClick = (todoId: string) => {
		navigate({
			pathname: `/todo/${todoId}`,
			search: `?${searchParams.toString()}`,
		});
	};

	return (
		<Box {...boxStyles}>
			<Table.Root {...tableRootStyles}>
				<Table.Header>
					<Table.Row bg={subtleBgColor}>
						<Table.ColumnHeader width="15%" />
						<Table.ColumnHeader fontWeight="semibold">목록</Table.ColumnHeader>
						<Table.ColumnHeader width="15%" textAlign="center">
							등록
						</Table.ColumnHeader>
						<Table.ColumnHeader width="15%" textAlign="center">
							수정
						</Table.ColumnHeader>
					</Table.Row>
				</Table.Header>

				<Table.Body>
					{todos && todos.length ? (
						todos.map((todo) => (
							<Table.Row
								key={todo.id}
								onClick={() => handleTodoClick(todo.id)}
								bgColor={todoId === todo.id ? "#e2efff" : "transparent"}
								{...todoRowStyles}
							>
								<Table.Cell width="15%" textAlign="center">
									{getTodoLabel(todo)}
								</Table.Cell>
								<Table.Cell>{todo.title}</Table.Cell>
								<Table.Cell>
									<Text textStyle="xs" textAlign="center">
										{dayjs(todo.createdAt).format("YY.MM.DD")}
									</Text>
								</Table.Cell>
								<Table.Cell>
									<Text textStyle="xs" textAlign="center">
										{dayjs(todo.updatedAt).format("YY.MM.DD")}
									</Text>
								</Table.Cell>
							</Table.Row>
						))
					) : (
						<Table.Row>
							<Table.Cell colSpan={4}>
								<Text textStyle="sm" textAlign="center">
									할 일이 없어요! 🥲
								</Text>
							</Table.Cell>
						</Table.Row>
					)}
				</Table.Body>
			</Table.Root>
		</Box>
	);
};

export default TodoList;

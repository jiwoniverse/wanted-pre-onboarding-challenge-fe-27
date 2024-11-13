import { useParams } from "react-router-dom";
import dayjs from "dayjs";

import { useTodoNavigation } from "@/hooks/useTodoNavigation";
import { getTodoLabel } from "@/services/todoService";

import { TodoItemType } from "@/types/todo";
import { OrderType, SortType } from "@/types/apis";

import { Box, Text, Table, HStack } from "@chakra-ui/react";
import { subtleBgColor, todoRowStyles, boxStyles, tableRootStyles, PriorityLabel } from "./styles";
import { FaCaretUp, FaCaretDown } from "react-icons/fa";

interface TodoListProps {
	todos: TodoItemType[];
	onSortChange: (sortKey: SortType) => void;
	sort?: SortType;
	order?: OrderType;
}

const TodoList = ({ todos, onSortChange, order }: TodoListProps) => {
	const { todoId } = useParams();
	const { handleTodoClick } = useTodoNavigation();

	const getSortIcon = () => {
		return order === "asc" ? <FaCaretUp /> : <FaCaretDown />;
	};

	return (
		<Box {...boxStyles}>
			<Table.Root {...tableRootStyles}>
				<Table.Header>
					<Table.Row bg={subtleBgColor}>
						<Table.ColumnHeader
							width="15%"
							textAlign="center"
							onClick={() => onSortChange("priority")}
							cursor="pointer"
						>
							<HStack gapX={1}>
								<Text>중요도</Text>
								{getSortIcon()}
							</HStack>
						</Table.ColumnHeader>
						<Table.ColumnHeader fontWeight="semibold">목록</Table.ColumnHeader>
						<Table.ColumnHeader
							width="15%"
							textAlign="center"
							onClick={() => onSortChange("createdAt")}
							cursor="pointer"
						>
							<HStack gapX={1}>
								<Text>등록일</Text>
								{getSortIcon()}
							</HStack>
						</Table.ColumnHeader>
						<Table.ColumnHeader
							width="15%"
							textAlign="center"
							onClick={() => onSortChange("updatedAt")}
							cursor="pointer"
						>
							<HStack gapX={1}>
								<Text>수정일</Text>
								{getSortIcon()}
							</HStack>
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
									<PriorityLabel priority={todo.priority}>{getTodoLabel(todo)}</PriorityLabel>
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

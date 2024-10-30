import { Navigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { getTodoById } from "@/apis/todo";

import { TodoItemType } from "@/shared/types";

import dayjs from "dayjs";
import { Box, Card, Text } from "@chakra-ui/react";

const TodoDetailPage = () => {
	const { id } = useParams();
	const [todo, setTodo] = useState<TodoItemType | null>(null);

	useEffect(() => {
		if (id) {
			fetchTodo();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [id]);

	if (!id) {
		return <Navigate to="/" />;
	}

	const fetchTodo = async () => {
		try {
			const { data } = await getTodoById(id);
			setTodo(data);
		} catch (error) {
			console.error("To-do detail fetch error", error);
		}
	};

	return (
		<Box width="100%" height="100%" paddingTop={11}>
			<Card.Root
				width="100%"
				height="full"
				maxHeight="fit-content"
				display="flex"
				alignItems="center"
				padding="6"
				gapY="4"
			>
				<Text textStyle="sm">{todo ? todo.content : "할 일 정보를 불러오는 중입니다..."}</Text>
				<Card.Footer padding="0">
					<Text textStyle="xs">등록일 {dayjs(todo?.createdAt).format("YYYY.MM.DD")}</Text>
					<Text textStyle="xs">수정일 {dayjs(todo?.updatedAt).format("YYYY.MM.DD")}</Text>
				</Card.Footer>
			</Card.Root>
		</Box>
	);
};

export default TodoDetailPage;

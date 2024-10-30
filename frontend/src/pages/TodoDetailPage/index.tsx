import { Navigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { getTodoById } from "@/apis/todo";

import { TodoItemType } from "@/shared/types";

import { Box, Text } from "@chakra-ui/react";

const TodoDetailPage = () => {
	const { id } = useParams();
	const [todo, setTodo] = useState<TodoItemType | null>(null);

	useEffect(() => {
		if (id) {
			fetchTodo();
		}
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
		<Box width="50%" padding={6}>
			<Text textStyle="sm">{todo ? todo.content : "할 일 정보를 불러오는 중입니다..."}</Text>
		</Box>
	);
};

export default TodoDetailPage;

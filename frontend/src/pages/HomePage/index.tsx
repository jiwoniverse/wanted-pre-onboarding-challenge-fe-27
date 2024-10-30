import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import { getTodo, createTodo } from "@/apis/todo";
import { TodoItemType } from "@/shared/types";

import TodoList from "./components/TodoList";

import { Flex, Box, Button, Input, VStack } from "@chakra-ui/react";
import { toaster } from "@/shared/components/ui/toaster";

const HomePage = () => {
	const navigate = useNavigate();
	const [todos, setTodos] = useState<TodoItemType[] | null>(null);
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");

	useEffect(() => {
		fetchTodos();
	}, []);

	const fetchTodos = async () => {
		try {
			const { data } = await getTodo();
			setTodos(data);
		} catch (error) {
			console.error("To-do list fetch error", error);
		}
	};

	const handleAddTodo = async (title: string, content: string) => {
		try {
			await createTodo({ title, content });
			toaster.create({
				title: "할 일이 추가 되었습니다.",
				type: "success",
				id: "create-to-do-success",
			});
			setTitle("");
			setContent("");
			fetchTodos();
		} catch (error) {
			console.log("할일 등록 에러", error);
			toaster.create({
				title: "추가 중 에러가 발생하였습니다.",
				type: "error",
				id: "create-to-do-error",
			});
		}
	};

	return (
		<Flex
			direction="column"
			gapY={4}
			alignItems="center"
			justifyContent="center"
			maxWidth="800px"
			width="100%"
			flex={1}
			flexGrow={1}
		>
			<Box width="100%" paddingY={2} display="flex" alignItems="center" justifyContent="flex-start">
				<Flex direction="column" width="50%" gapY={5}>
					<VStack width="100%">
						<Input
							value={title}
							onChange={(e) => setTitle(e.currentTarget.value)}
							placeholder="할 일 제목"
							variant="flushed"
						/>
						<Input
							value={content}
							onChange={(e) => setContent(e.currentTarget.value)}
							placeholder="할 일 내용"
							variant="flushed"
						/>
					</VStack>
					<Button onClick={() => handleAddTodo(title, content)} size="sm" variant="outline">
						할 일 추가
					</Button>
				</Flex>
			</Box>
			<Flex direction="row" maxWidth="800px" width="100%" flex={1} flexGrow={1}>
				<Box width="50%">
					<TodoList todos={todos} onSelect={(id) => navigate(`/${id}`)} />
				</Box>
				<Box width="50%">
					<Outlet />
				</Box>
			</Flex>
		</Flex>
	);
};

export default HomePage;

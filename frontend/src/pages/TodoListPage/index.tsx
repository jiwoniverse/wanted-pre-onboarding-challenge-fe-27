import { useEffect, useState, useTransition } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";

import * as z from "zod";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AddTodoSchema } from "@/shared/schema";

import { createTodo, getTodo } from "@/apis/todo";
import { TodoItemType } from "@/shared/types";
import { toaster } from "@/shared/components/ui/toaster";

import TodoList from "./components/TodoList";
import { Flex, Box, Button, Input, VStack } from "@chakra-ui/react";

const TodoListPage = () => {
	const navigate = useNavigate();
	const { id } = useParams();

	const [todos, setTodos] = useState<TodoItemType[] | null>(null);
	const [isPending, startTransition] = useTransition();

	const methods = useForm<z.infer<typeof AddTodoSchema>>({
		resolver: zodResolver(AddTodoSchema),
		defaultValues: {
			title: "",
			content: "",
		},
		mode: "onChange",
	});

	useEffect(() => {
		fetchTodos();
	}, []);

	useEffect(() => {
		if (todos && todos.length > 0 && !id) {
			navigate(`/todo/${todos[0].id}`);
		}
	}, [todos, id, navigate]);

	const fetchTodos = async (): Promise<TodoItemType[] | null> => {
		try {
			const { data } = await getTodo();
			setTodos(data);
			return data;
		} catch (error) {
			console.error("fetchTodos error", error);
			return null;
		}
	};

	const onSubmit = async (values: z.infer<typeof AddTodoSchema>) => {
		try {
			const res = await createTodo(values);
			if (res.ok) {
				const updatedTodos = await fetchTodos();

				startTransition(() => {
					methods.reset();
					const lastTodo = updatedTodos?.[updatedTodos.length - 1];
					if (lastTodo) {
						navigate(`/todo/${lastTodo.id}`);
					}
				});

				toaster.create({
					title: "할 일이 등록되었습니다.",
					type: "success",
					id: "add-todo-success",
				});
			} else {
				const errorMessage = await res.text();
				toaster.create({
					title: errorMessage,
					type: "error",
					id: "add-todo-error",
				});
			}
		} catch (error) {
			console.error("createTodo error", error);
		}
	};

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
					<FormProvider {...methods}>
						<form onSubmit={methods.handleSubmit(onSubmit)}>
							<VStack width="100%" gapY={4}>
								<VStack width="100%">
									<Input
										{...methods.register("title")}
										placeholder="할 일 제목"
										variant="flushed"
										autoComplete="off"
									/>
									<Input
										{...methods.register("content")}
										placeholder="할 일 내용"
										variant="flushed"
										autoComplete="off"
									/>
								</VStack>
								<Button type="submit" disabled={isPending} size="sm" variant="outline" width="100%">
									할 일 추가
								</Button>
							</VStack>
						</form>
					</FormProvider>
				</Flex>
			</Box>
			<Flex direction="row" gap={4} maxWidth="800px" width="100%" flex={1} flexGrow={1}>
				<Box width="50%">
					<TodoList todos={todos} selectedId={id} onSelect={(id) => navigate(`/todo/${id}`)} />
				</Box>
				<Box width="50%">
					<Outlet />
				</Box>
			</Flex>
		</Flex>
	);
};

export default TodoListPage;

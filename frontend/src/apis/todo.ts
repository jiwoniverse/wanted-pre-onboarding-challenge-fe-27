import { TodoListType, CreateTodoRequest, TodoDetailResponse } from "@/shared/types";
import { http } from "@/apis/http";

export const getTodos = async () => {
	return http.get<TodoListType>("/todos");
};

export const createTodo = async ({ title, content }: CreateTodoRequest) => {
	return http.post("/todos", { title, content });
};

export const getTodoById = async (id: string) => {
	return http.get<TodoDetailResponse>(`/todos/${id}`);
};

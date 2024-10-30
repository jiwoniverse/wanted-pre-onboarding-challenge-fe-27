import { TodoListType, CreateTodoRequest, TodoDetailResponse } from "@/shared/types";
import { http } from "@/apis/http";

export const getTodo = async () => {
	return http.get<TodoListType>("/todos");
};

export const createTodo = async (body: CreateTodoRequest) => {
	return http.post("/todos", body);
};

export const getTodoById = async (id: string) => {
	return http.get<TodoDetailResponse>(`/todos/${id}`);
};

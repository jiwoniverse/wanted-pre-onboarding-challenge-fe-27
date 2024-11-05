import { TodoListType, CreateTodoRequest, TodoDetailResponse, UpdateTodoRequest } from "@/types";
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

export const updateTodo = async ({ id, title, content }: UpdateTodoRequest) => {
	return http.put(`/todos/${id}`, { title, content });
};

export const deleteTodo = async (id: string) => {
	return http.delete(`/todos/${id}`);
};

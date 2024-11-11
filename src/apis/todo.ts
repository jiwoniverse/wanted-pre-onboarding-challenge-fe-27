import { http } from "@/apis/http";

import { GetTodosParams } from "@/types/apis";
import {
	TodoListType,
	CreateTodoRequest,
	TodoDetailResponse,
	UpdateTodoRequest,
} from "@/types/todo";

export const getTodos = ({ priorityFilter, keyword, sort, order }: GetTodosParams = {}) => {
	const params: Record<string, string> = {};

	if (priorityFilter) params.priorityFilter = priorityFilter;
	if (keyword) params.keyword = keyword;
	if (sort) params.sort = sort;
	if (order) params.order = order;

	const queryString = Object.keys(params).length
		? "?" + new URLSearchParams(params).toString()
		: "";

	return http.get<TodoListType>(`/todos${queryString}`);
};

export const createTodo = ({ title, content, priority }: CreateTodoRequest) => {
	return http.post("/todos", { title, content, priority });
};

export const getTodoById = (id: string) => {
	return http.get<TodoDetailResponse>(`/todos/${id}`);
};

export const updateTodo = ({ id, title, content }: UpdateTodoRequest) => {
	return http.put(`/todos/${id}`, { title, content });
};

export const deleteTodo = (id: string) => {
	return http.delete(`/todos/${id}`);
};

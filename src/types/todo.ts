export type priorityType = "urgent" | "normal" | "low";

export interface TodoItemType {
	title: string;
	content: string;
	id: string;
	createdAt: string;
	updatedAt: string;
	priority: priorityType;
}

export interface TodoListType {
	data: TodoItemType[];
}

export interface CreateTodoRequest {
	title: string;
	content: string;
	priority: priorityType;
}

export interface TodoDetailResponse {
	data: TodoItemType;
}

export interface UpdateTodoRequest {
	id: string;
	title: string;
	content: string;
	priority: priorityType;
}

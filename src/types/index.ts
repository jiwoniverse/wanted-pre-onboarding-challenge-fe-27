export interface LoginRequest {
	email: string;
	password: string;
}

export interface LoginResponse {
	message: string;
	token: string;
}

export interface SignUpRequest {
	email: string;
	password: string;
}

export interface SignUpResponse {
	message: string;
	token: string;
}

export interface TodoItemType {
	title: string;
	content: string;
	id: string;
	createdAt: string;
	updatedAt: string;
}

export interface TodoListType {
	data: TodoItemType[];
}

export interface CreateTodoRequest {
	title: string;
	content: string;
}

export interface TodoDetailResponse {
	data: TodoItemType;
}

export interface UpdateTodoRequest {
	id: string;
	title: string;
	content: string;
}

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

export interface GetTodosParams {
	priorityFilter?: "urgent" | "normal" | "low";
	keyword?: string;
	sort?: "createdAt" | "updatedAt";
	order?: "asc" | "desc";
}

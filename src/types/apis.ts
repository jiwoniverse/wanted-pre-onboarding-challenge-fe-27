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

export type priorityFilterType = "urgent" | "normal" | "low";
export type SortType = "createdAt" | "updatedAt" | "priority";
export type OrderType = "asc" | "desc";

export interface GetTodosParams {
	priorityFilter?: priorityFilterType;
	keyword?: string;
	sort?: SortType;
	order?: OrderType;
	[key: string]: unknown;
}

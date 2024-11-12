export const PATH = {
	ROOT: "/",
	LOGIN: "/auth/login",
	SIGN_UP: "/auth/signup",
	TODO: "/todo",
	TODO_DETAIL: (todoId: string) => `/todo/${todoId}`,
};

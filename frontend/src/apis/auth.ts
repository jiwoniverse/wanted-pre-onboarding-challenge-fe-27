import createApiErrorMessage from "./apiErrorMessageCreator";

import { LoginRequest, LoginResponse } from "@/shared/types";

export const postLogin = async (loginRequest: LoginRequest): Promise<LoginResponse> => {
	const response = await fetch("http://localhost:8080/users/login", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(loginRequest),
	});

	if (!response.ok) {
		throw new Error(createApiErrorMessage(response.status));
	}

	const data = await response.json();
	return data;
};

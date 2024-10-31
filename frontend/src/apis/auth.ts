import createApiErrorMessage from "./apiErrorMessageCreator";

import { LoginRequest, LoginResponse, SignUpRequest, SignUpResponse } from "@/shared/types";
import { BASE_URL } from "./http";

export const postLogin = async (loginRequest: LoginRequest): Promise<LoginResponse> => {
	const response = await fetch(`${BASE_URL}/users/login`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(loginRequest),
	});

	if (!response.ok) {
		const errorData = await response.json();
		const errorMessage = errorData.details || createApiErrorMessage(response.status);
		throw new Error(errorMessage);
	}

	const data = await response.json();
	return data;
};

export const postSignUp = async (signUpRequest: SignUpRequest): Promise<SignUpResponse> => {
	const response = await fetch(`${BASE_URL}/users/create`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(signUpRequest),
	});

	if (!response.ok) {
		const errorData = await response.json();
		const errorMessage = errorData.details || createApiErrorMessage(response.status);
		throw new Error(errorMessage);
	}

	const data = await response.json();
	return data;
};

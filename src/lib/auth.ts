import * as z from "zod";

import { LoginSchema, SignUpSchema } from "@/schema/auth";
import { postLogin, postSignUp } from "@/apis/auth";
import { LOCAL_STORAGE_KEY } from "@/constants/auth";

export const accessToken = localStorage.getItem(LOCAL_STORAGE_KEY.ACCESS_TOKEN) ?? "";

// 함수가 아니라 변수로 선언하면 값이 파일이 처음 불러와질 때 한번만 평가되므로 값이 업데이트 되지 않음
export const isAuthenticated = () => !!localStorage.getItem(LOCAL_STORAGE_KEY.ACCESS_TOKEN);

export const login = async (values: z.infer<typeof LoginSchema>) => {
	const validatedFields = LoginSchema.safeParse(values);

	if (!validatedFields.success) {
		return { error: "유효하지 않은 입력값입니다." };
	}

	try {
		const response = await postLogin(values);
		localStorage.setItem(LOCAL_STORAGE_KEY.ACCESS_TOKEN, response.token);
		return { success: response.message };
	} catch (error) {
		if (error instanceof Error) {
			console.error(error.message);
			return { error: error.message };
		}
		console.error("Unexpected error:", error);
		return { error: "알 수 없는 오류가 발생했습니다." };
	}
};

export const logout = (): Promise<{ success?: string; error?: string }> => {
	return new Promise((resolve) => {
		try {
			localStorage.removeItem(LOCAL_STORAGE_KEY.ACCESS_TOKEN);
			resolve({ success: "로그아웃 되었습니다." });
		} catch (error) {
			console.log("Unexpected error:", error);
			resolve({ error: "알 수 없는 오류가 발생했습니다." });
		}
	});
};

export const signUp = async (values: z.infer<typeof SignUpSchema>) => {
	const validatedFields = LoginSchema.safeParse(values);

	if (!validatedFields.success) {
		return { error: "유효하지 않은 입력값입니다." };
	}

	try {
		const response = await postSignUp(values);
		localStorage.setItem(LOCAL_STORAGE_KEY.ACCESS_TOKEN, response.token);
		return { success: response.message };
	} catch (error) {
		if (error instanceof Error) {
			console.error(error.message);
			return { error: error.message };
		}
		console.error("Unexpected error:", error);
		return { error: "알 수 없는 오류가 발생했습니다." };
	}
};

import * as z from "zod";

import { LoginSchema, SignUpSchema } from "@/shared/schema";
import { postLogin, postSignUp } from "@/apis/auth";

export const login = async (values: z.infer<typeof LoginSchema>) => {
	const validatedFields = LoginSchema.safeParse(values);

	if (!validatedFields.success) {
		return { error: "유효하지 않은 입력값입니다." };
	}

	try {
		const response = await postLogin(values);
		localStorage.setItem("access_token", response.token);
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
			localStorage.removeItem("access_token");
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
		localStorage.setItem("access_token", response.token);
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

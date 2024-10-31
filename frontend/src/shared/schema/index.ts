import * as z from "zod";

export const LoginSchema = z.object({
	email: z
		.string()
		.min(1, { message: "이메일을 입력해주세요." })
		.email({ message: "올바른 이메일 형식으로 입력해주세요." }),
	password: z.string().min(1, { message: "비밀번호를 입력해주세요" }),
});

export const SignUpSchema = z.object({
	email: z
		.string()
		.min(1, { message: "이메일을 입력해주세요." })
		.email({ message: "올바른 이메일 형식으로 입력해주세요." }),
	password: z
		.string()
		.min(1, { message: "비밀번호를 입력해주세요" })
		.min(8, { message: "비밀번호는 8자 이상으로 입력해주세요." }),
});

export const TodoSchema = z.object({
	title: z.string().min(1, { message: "할 일 제목을 입력해주세요." }),
	content: z.string().min(1, { message: "할 일 내용을 입력해주세요." }),
});

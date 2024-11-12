import * as z from "zod";
import { TODO_PRIORITY_VALUES } from "@/constants/todo";

export const TodoSchema = z.object({
	title: z.string().min(1, { message: "할 일 제목을 입력해주세요." }),
	content: z.string().min(1, { message: "할 일 내용을 입력해주세요." }),
	priority: z.enum(TODO_PRIORITY_VALUES, { message: "우선순위를 선택해주세요." }),
});

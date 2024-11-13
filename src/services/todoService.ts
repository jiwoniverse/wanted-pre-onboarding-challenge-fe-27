import { TodoItemType } from "@/types/todo";
import { priorityOptions } from "@/constants/todo";

export const getTodoLabel = (todo: TodoItemType) => {
	return priorityOptions.find((option) => option.value === todo.priority)?.label;
};

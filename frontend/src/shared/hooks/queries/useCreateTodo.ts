import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTodo } from "@/apis/todo";
import { CreateTodoRequest } from "@/shared/types";

export const useCreateTodo = () => {
	const queryClient = useQueryClient();
	const { mutate } = useMutation({
		mutationFn: (params: CreateTodoRequest) => createTodo(params),
		onSuccess: () => queryClient.invalidateQueries({ queryKey: ["todos"] }),
	});

	return { mutateCreateTodo: mutate };
};

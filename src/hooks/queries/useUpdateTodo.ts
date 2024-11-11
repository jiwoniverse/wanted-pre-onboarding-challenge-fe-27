import { useMutation, useQueryClient } from "@tanstack/react-query";

import { updateTodo } from "@/apis/todo";
import { UpdateTodoRequest } from "@/types/todo";

import { toaster } from "@/components/ui/toaster";

export const useUpdateTodo = (id?: string) => {
	const queryClient = useQueryClient();
	const { mutate } = useMutation({
		mutationFn: (params: UpdateTodoRequest) => updateTodo(params),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["todos"] });
			queryClient.invalidateQueries({ queryKey: ["todo", id] });
			toaster.create({
				title: "할 일이 수정되었습니다.",
				type: "success",
				id: "update-todo-success",
			});
		},
	});

	return { mutateUpdateTodo: mutate };
};

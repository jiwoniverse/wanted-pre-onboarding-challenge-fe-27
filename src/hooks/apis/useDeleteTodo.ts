import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { deleteTodo } from "@/apis/todo";

import { toaster } from "@/components/ui/toaster";
import { PATH } from "@/constants/path";

export const useDeleteTodo = (id?: string) => {
	const navigate = useNavigate();
	const queryClient = useQueryClient();
	const { mutate } = useMutation({
		mutationFn: (id: string) => deleteTodo(id),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["todos"] });
			queryClient.removeQueries({ queryKey: ["todo", id] });
			toaster.create({
				title: "할 일이 삭제되었습니다.",
				type: "success",
				id: "delete-todo-success",
			});
			navigate(PATH.TODO);
		},
	});

	return { mutateDeleteTodo: mutate };
};

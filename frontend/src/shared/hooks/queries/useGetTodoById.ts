import { useQuery } from "@tanstack/react-query";
import { getTodoById } from "@/apis/todo";

export const useGetTodoById = (id?: string) => {
	const { data, isLoading } = useQuery({
		queryKey: ["todos", id],
		queryFn: () => getTodoById(id!),
		enabled: !!id,
		staleTime: 60 * 1000,
	});

	return { todo: data?.data, isLoadingTodo: isLoading };
};

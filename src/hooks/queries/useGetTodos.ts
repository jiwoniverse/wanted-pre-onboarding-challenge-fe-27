import { useQuery } from "@tanstack/react-query";
import { getTodos } from "@/apis/todo";
import { GetTodosParams } from "@/types/apis";

export const useGetTodos = (params?: GetTodosParams) => {
	const { data, isLoading } = useQuery({
		queryKey: ["todos", params],
		queryFn: () => getTodos(params),
	});

	return { todos: data?.data ?? [], isLoadingTodos: isLoading };
};

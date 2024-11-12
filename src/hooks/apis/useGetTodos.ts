import { useQuery } from "@tanstack/react-query";
import { getTodos } from "@/apis/todo";
import { GetTodosParams } from "@/types/apis";
import { isAuthenticated } from "@/lib/auth";

export const useGetTodos = (params?: GetTodosParams) => {
	const { data, isLoading } = useQuery({
		queryKey: ["todos", params],
		queryFn: () => getTodos(params),
		enabled: !!isAuthenticated,
	});

	return { todos: data?.data ?? [], isLoadingTodos: isLoading };
};

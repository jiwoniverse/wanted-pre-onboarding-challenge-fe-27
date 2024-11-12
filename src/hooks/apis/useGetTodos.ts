import { useQuery } from "@tanstack/react-query";
import { getTodos } from "@/apis/todo";
import { GetTodosParams } from "@/types/apis";
import { isAuthenticated } from "@/lib/auth";

export const useGetTodos = (params: GetTodosParams) => {
	const { priorityFilter, keyword, sort, order } = params;

	const queryKey = [
		"todos",
		priorityFilter || undefined,
		keyword || undefined,
		sort || undefined,
		order || undefined,
	];

	const { data, isLoading } = useQuery({
		queryKey,
		queryFn: () => getTodos(params),
		enabled: !!isAuthenticated,
	});

	return { todos: data?.data ?? [], isLoadingTodos: isLoading };
};

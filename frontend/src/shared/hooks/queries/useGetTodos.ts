import { useQuery } from "@tanstack/react-query";
import { getTodos } from "@/apis/todo";

export const useGetTodos = () => {
	const { data, isLoading } = useQuery({
		queryKey: ["todos"],
		queryFn: getTodos,
		staleTime: 60 * 1000,
	});

	return { todos: data?.data ?? [], isLoadingTodos: isLoading };
};

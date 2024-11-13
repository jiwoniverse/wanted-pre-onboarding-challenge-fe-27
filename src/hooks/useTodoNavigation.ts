import { useNavigate, useSearchParams } from "react-router-dom";

export const useTodoNavigation = () => {
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();

	const handleTodoClick = (todoId: string) => {
		navigate({
			pathname: `/todo/${todoId}`,
			search: `?${searchParams.toString()}`,
		});
	};

	return { handleTodoClick };
};

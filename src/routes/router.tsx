import { createBrowserRouter, redirect } from "react-router-dom";
import type { LoaderFunctionArgs } from "react-router-dom";

import { isAuthenticated } from "@/services/authService";

import App from "../App";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import TodoListPage from "../pages/TodoListPage";
import TodoDetailPage from "../pages/TodoDetailPage";

import { PATH } from "@/constants/path";

// const privateRoutes = [PATH.TODO];
const authRoutes = [PATH.LOGIN, PATH.SIGN_UP];

const authLoader = ({ request }: LoaderFunctionArgs) => {
	const path = new URL(request.url).pathname;

	const isPrivateRoutes = path.includes("todo");
	const isAuthRoutes = authRoutes.includes(path);

	if (!isAuthenticated() && isPrivateRoutes) {
		return redirect(PATH.LOGIN);
	} else if (isAuthenticated() && isAuthRoutes) {
		return redirect(PATH.ROOT);
	}
	return null;
};

const router = createBrowserRouter([
	{
		path: PATH.ROOT,
		element: <App />,
		loader: authLoader,
		children: [
			{
				path: "",
				element: <HomePage />,
			},
			{
				path: PATH.LOGIN,
				element: <LoginPage />,
			},
			{
				path: PATH.SIGN_UP,
				element: <SignUpPage />,
			},
			{
				path: PATH.TODO,
				element: <TodoListPage />,
				children: [
					{
						path: ":todoId",
						element: <TodoDetailPage />,
					},
				],
			},
		],
	},
]);

export default router;

import { createBrowserRouter, redirect } from "react-router-dom";
import { isAuthenticated } from "./lib/auth";

import App from "./App";

import HomePage from "@/pages/HomePage";
import LoginPage from "@/pages/LoginPage";
import SignUpPage from "@/pages/SignUpPage";
import TodoListPage from "@/pages/TodoListPage";
import TodoDetailPage from "@/pages/TodoDetailPage";

import { PATH } from "@/constants/path";

// loader
const authLoader = async () => {
	if (!isAuthenticated()) {
		return redirect(PATH.LOGIN);
	}
	return null;
};

const router = createBrowserRouter([
	{
		path: PATH.ROOT,
		element: <App />,
		children: [
			{
				path: "",
				element: <HomePage />,
				loader: authLoader,
			},
			{ path: PATH.LOGIN, element: <LoginPage /> },
			{ path: PATH.SIGN_UP, element: <SignUpPage /> },
			{
				path: PATH.TODO,
				element: <TodoListPage />,
				loader: authLoader,
				children: [
					{
						path: ":todoId",
						element: <TodoDetailPage />,
						loader: authLoader,
					},
				],
			},
		],
	},
]);

export default router;

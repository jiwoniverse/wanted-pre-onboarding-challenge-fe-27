import { createBrowserRouter } from "react-router-dom";

import App from "./App";

import HomePage from "@/pages/HomePage";
import LoginPage from "@/pages/LoginPage";
import PrivateRoute from "@/components/common/PrivateRoute";
import SignUpPage from "@/pages/SignUpPage";
import TodoListPage from "@/pages/TodoListPage";
import TodoDetailPage from "@/pages/TodoDetailPage";

import { PATH } from "@/constants/path";

const router = createBrowserRouter([
	{
		path: PATH.ROOT,
		element: <App />,
		children: [
			{
				path: "",
				element: <HomePage />,
			},
			{ path: PATH.LOGIN, element: <LoginPage /> },
			{ path: PATH.SIGN_UP, element: <SignUpPage /> },
			{
				path: PATH.TODO,
				element: (
					<PrivateRoute>
						<TodoListPage />
					</PrivateRoute>
				),
				children: [
					{
						path: "/:todoId",
						element: (
							<PrivateRoute>
								<TodoDetailPage />
							</PrivateRoute>
						),
					},
				],
			},
		],
	},
]);

export default router;

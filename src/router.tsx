import { createBrowserRouter } from "react-router-dom";

import App from "./App";

import HomePage from "@/pages/HomePage";
import LoginPage from "@/pages/LoginPage";
import PrivateRoute from "@/shared/components/common/PrivateRoute";
import SignUpPage from "@/pages/SignUpPage";
import TodoListPage from "@/pages/TodoListPage";
import TodoDetailPage from "./pages/TodoDetailPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "",
				element: <HomePage />,
			},
			{ path: "/auth/login", element: <LoginPage /> },
			{ path: "/auth/signup", element: <SignUpPage /> },
			{
				path: "/todo",
				element: (
					<PrivateRoute>
						<TodoListPage />
					</PrivateRoute>
				),
				children: [
					{
						path: ":id",
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

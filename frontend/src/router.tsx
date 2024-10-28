import { createBrowserRouter } from "react-router-dom";

import App from "./App";

import HomePage from "@/pages/HomePage";
import LoginPage from "@/pages/LoginPage";
import SignUpPage from "@/pages/SignUpPage";
import TodoListPage from "./pages/TodoListPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{ path: "", element: <HomePage /> },
			{ path: "/login", element: <LoginPage /> },
			{ path: "/signup", element: <SignUpPage /> },
			{ path: "/todo-list", element: <TodoListPage /> },
		],
	},
]);

export default router;

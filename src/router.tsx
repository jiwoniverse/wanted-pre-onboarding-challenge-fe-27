import { Suspense } from "react";
import { createBrowserRouter, redirect } from "react-router-dom";
import type { LoaderFunctionArgs } from "react-router-dom";

import { isAuthenticated } from "@/services/authService";

import App from "./App";
import { HomePage, LoginPage, SignUpPage, TodoListPage, TodoDetailPage } from "./pages";

import { PATH } from "@/constants/path";
import Loading from "./components/common/Loading";

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
				element: (
					<Suspense fallback={<Loading />}>
						<HomePage />
					</Suspense>
				),
			},
			{
				path: PATH.LOGIN,
				element: (
					<Suspense fallback={<Loading />}>
						<LoginPage />
					</Suspense>
				),
			},
			{
				path: PATH.SIGN_UP,
				element: (
					<Suspense fallback={<Loading />}>
						<SignUpPage />
					</Suspense>
				),
			},
			{
				path: PATH.TODO,
				element: (
					<Suspense fallback={<Loading />}>
						<TodoListPage />
					</Suspense>
				),
				children: [
					{
						path: ":todoId",
						element: (
							<Suspense fallback={<Loading />}>
								<TodoDetailPage />
							</Suspense>
						),
					},
				],
			},
		],
	},
]);

export default router;

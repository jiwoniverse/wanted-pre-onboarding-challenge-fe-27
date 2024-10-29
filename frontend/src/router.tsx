import { createBrowserRouter } from "react-router-dom";

import App from "./App";

import HomePage from "@/pages/HomePage";
import LoginPage from "@/pages/LoginPage";
import PrivateRoute from "@/shared/components/common/PrivateRoute";
import SignUpPage from "@/pages/SignUpPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "",
				element: (
					<PrivateRoute>
						<HomePage />
					</PrivateRoute>
				),
			},
			{ path: "/auth/login", element: <LoginPage /> },
			{ path: "/auth/signup", element: <SignUpPage /> },
		],
	},
]);

export default router;

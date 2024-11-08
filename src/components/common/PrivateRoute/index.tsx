import { LOCAL_STORAGE_KEY } from "@//constants";
import type { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps extends PropsWithChildren {
	redirectTo?: string;
}

const PrivateRoute = ({
	redirectTo = "/auth/login?success=false",
	children,
}: PrivateRouteProps) => {
	const token = localStorage.getItem(LOCAL_STORAGE_KEY.ACCESS_TOKEN);

	if (!token) {
		return <Navigate to={redirectTo} />;
	}

	return <>{children}</>;
};

export default PrivateRoute;

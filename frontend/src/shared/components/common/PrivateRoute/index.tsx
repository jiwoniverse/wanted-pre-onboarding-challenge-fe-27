// src/shared/components/common/PrivateRoute
import type { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps extends PropsWithChildren {
	redirectTo?: string;
}

const PrivateRoute = ({
	redirectTo = "/auth/login?success=false",
	children,
}: PrivateRouteProps) => {
	const token = localStorage.getItem("access_token");

	if (!token) {
		return <Navigate to={redirectTo} />;
	}

	return <>{children}</>;
};

export default PrivateRoute;

import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { accessToken } from "@/lib/auth";

import LoginForm from "@/pages/LoginPage/components/LoginForm";
import { toaster } from "@/components/ui/toaster";
// import * as S from "./styles";

const LoginPage = () => {
	useEffect(() => {
		const query = new URLSearchParams(window.location.search);
		const successParam = query.get("success");

		if (successParam === "false") {
			toaster.create({
				title: "로그인이 필요한 페이지입니다.",
				type: "warning",
				id: "auth-error",
			});
		}
	}, []);

	return accessToken ? <Navigate to="/" /> : <LoginForm />;
};

export default LoginPage;

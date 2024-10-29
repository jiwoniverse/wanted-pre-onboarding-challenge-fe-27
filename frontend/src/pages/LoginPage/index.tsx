import { useEffect } from "react";
import LoginForm from "@/pages/LoginPage/components/LoginForm";
import { toaster } from "@/shared/components/ui/toaster";
import { Navigate } from "react-router-dom";
// import * as S from "./styles";

const LoginPage = () => {
	const token = localStorage.getItem("access_token");

	useEffect(() => {
		const query = new URLSearchParams(window.location.search);
		const successParam = query.get("success");

		if (successParam === "false") {
			toaster.create({
				title: "로그인 해주세요.",
				type: "warning",
				id: "auth-error",
			});
		}
	}, []);

	return token ? <Navigate to="/" /> : <LoginForm />;
};

export default LoginPage;

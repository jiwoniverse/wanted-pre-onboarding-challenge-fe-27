import { useEffect } from "react";
import { Navigate } from "react-router-dom";

import { LOCAL_STORAGE_KEY } from "@/shared/constants";

import LoginForm from "@/pages/LoginPage/components/LoginForm";
import { toaster } from "@/shared/components/ui/toaster";
// import * as S from "./styles";

const LoginPage = () => {
	const token = localStorage.getItem(LOCAL_STORAGE_KEY.ACCESS_TOKEN);

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

	return token ? <Navigate to="/" /> : <LoginForm />;
};

export default LoginPage;

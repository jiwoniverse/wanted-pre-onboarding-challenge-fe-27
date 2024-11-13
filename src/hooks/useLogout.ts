import { useTransition } from "react";
import { useNavigate } from "react-router-dom";

import { logout } from "@/services/authService";

import { toaster } from "@/components/ui/toaster";

export const useLogout = () => {
	const navigate = useNavigate();
	const [isPending, startTransition] = useTransition();

	const handleLogout = () => {
		startTransition(() => {
			logout()
				.then((data) => {
					if (data.success) {
						toaster.create({
							title: "로그아웃 되었습니다.",
							type: "success",
							id: "logout-success",
						});
					} else {
						toaster.create({
							title: "로그아웃 도중에 문제가 발생했습니다.",
							type: "warning",
							id: "logout-error",
						});
					}
				})
				.finally(() => navigate("/auth/login"));
		});
	};

	return { handleLogout, isPending };
};

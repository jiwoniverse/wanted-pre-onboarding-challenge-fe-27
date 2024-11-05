import { useNavigate, useLocation } from "react-router-dom";
import { useTransition } from "react";

import { logout } from "@//lib/auth";

import { Box, Heading, HStack } from "@chakra-ui/react";
import { Button } from "@//components/ui/button";
import { toaster } from "../../ui/toaster";

const Header = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const [isPending, startTransition] = useTransition();

	const isAuthRoute = location.pathname === "/auth/login" || location.pathname === "/auth/signup";

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
	return (
		<Box
			display="flex"
			justifyContent="center"
			marginY="auto"
			width="100%"
			paddingX={6}
			paddingY={4}
		>
			<HStack
				display="flex"
				justifyContent="space-between"
				width="100%"
				maxWidth="600px"
				height="40px"
			>
				<Heading size="md">To do list</Heading>
				{isAuthRoute ? null : (
					<Button onClick={handleLogout} disabled={isPending} size="sm">
						로그아웃
					</Button>
				)}
			</HStack>
		</Box>
	);
};

export default Header;

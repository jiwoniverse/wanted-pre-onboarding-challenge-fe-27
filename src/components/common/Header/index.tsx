import { useLocation } from "react-router-dom";

import { useLogout } from "@/hooks/useLogout";

import { PATH } from "@/constants/path";

import { Box, Heading, HStack } from "@chakra-ui/react";
import { Button } from "@/components/ui/button";

const Header = () => {
	const location = useLocation();
	const { handleLogout, isPending } = useLogout();

	const isAuthRoutes = location.pathname === PATH.LOGIN || location.pathname === PATH.SIGN_UP;

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
				{isAuthRoutes ? null : (
					<Button onClick={handleLogout} disabled={isPending} size="sm">
						로그아웃
					</Button>
				)}
			</HStack>
		</Box>
	);
};

export default Header;

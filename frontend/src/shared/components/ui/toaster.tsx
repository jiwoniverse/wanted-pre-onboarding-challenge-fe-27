"use client";

import {
	Toaster as ChakraToaster,
	Portal,
	Spinner,
	Stack,
	Toast,
	createToaster,
} from "@chakra-ui/react";
import { keyframes } from "@emotion/react";

const fadeIn = keyframes`
	from { opacity: 0; }
	to { opacity: 1; }
`;

const fadeOut = keyframes`
	from { opacity: 1; }
	to { opacity: 0; }
`;

// eslint-disable-next-line react-refresh/only-export-components
export const toaster = createToaster({
	placement: "top",
	overlap: false,
	pauseOnPageIdle: true,
	duration: 2000,
});

export const Toaster = () => {
	return (
		<Portal>
			<ChakraToaster
				toaster={toaster}
				insetInline={{ mdDown: "1rem" }}
				width={{ md: "356px" }}
				margin="0 auto"
				data-state="open"
				_open={{ animation: `${fadeIn} 700ms ease-in, ${fadeOut} 700ms ease-out 2000ms` }}
			>
				{(toast) => (
					<Toast.Root>
						{toast.type === "loading" ? (
							<Spinner size="sm" color="blue.solid" />
						) : (
							<Toast.Indicator />
						)}
						<Stack gap="1" flex="1" maxWidth="100%">
							{toast.title && <Toast.Title>{toast.title}</Toast.Title>}
							{toast.description && <Toast.Description>{toast.description}</Toast.Description>}
						</Stack>
						{toast.action && <Toast.ActionTrigger>{toast.action.label}</Toast.ActionTrigger>}
						{toast.meta?.closable && <Toast.CloseTrigger />}
					</Toast.Root>
				)}
			</ChakraToaster>
		</Portal>
	);
};

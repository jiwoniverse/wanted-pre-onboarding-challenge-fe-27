import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { RouterProvider } from "react-router-dom";
import router from "./router";

import { Provider as ChakraUIProvider } from "@/components/ui/provider";
import { Global } from "@emotion/react";
import globalStyles from "@/styles/globalStyles";
import { Toaster } from "@/components/ui/toaster";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: 2,
			staleTime: 2 * 60 * 1000, // 2분
			gcTime: 30 * 1000, // 30초
		},
	},
});

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<ChakraUIProvider>
				<Global styles={globalStyles} />
				<RouterProvider router={router} />
				<Toaster />
			</ChakraUIProvider>
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	</StrictMode>
);

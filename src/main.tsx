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

// NOTE: 공식문서처럼 아래와 같이 main.tsx에 queryClient를 생성해주는 경우
// Next.js SSR에서는 사용자들이 같은 서버에서 같은 인스턴스를 사용하게 되는 치명적인 문제가 발생함에 유의할 것
// const queryClient = new QueryClient({
// 	defaultOptions: {
// 		queries: {
// 			retry: 2,
// 			staleTime: 2 * 60 * 1000, // 2분
// 			gcTime: 30 * 1000, // 30초
// 		},
// 	},
// });

// 새로운 인스턴스를 생성해주어야 함
const getQueryClient = () => {
	return new QueryClient({
		defaultOptions: {
			queries: {
				retry: 2,
				staleTime: 2 * 60 * 1000, // 2분
				// gcTime: 30 * 1000, // 30초
			},
		},
	});
};

const queryClient = getQueryClient();

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<ChakraUIProvider>
				<Global styles={globalStyles} />
				<RouterProvider router={router} />
				<Toaster />
			</ChakraUIProvider>
			<div style={{ fontSize: "16px" }}>
				<ReactQueryDevtools initialIsOpen={false} />
			</div>
		</QueryClientProvider>
	</StrictMode>
);

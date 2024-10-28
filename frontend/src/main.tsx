import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { RouterProvider } from "react-router-dom";
import router from "./router";

import { Provider } from "@/shared/components/ui/provider";
import { Global } from "@emotion/react";
import globalStyles from "@/styles/globalStyles";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Provider>
			<Global styles={globalStyles} />
			<RouterProvider router={router} />
		</Provider>
	</StrictMode>
);

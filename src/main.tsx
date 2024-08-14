import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./_index.scss";
import { RouterProvider } from "react-router-dom";
import router from "./routing/Router";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);

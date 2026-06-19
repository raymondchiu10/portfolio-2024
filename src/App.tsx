import { RouterProvider } from "react-router-dom";
import router from "./routing/Router";
import { initGTM } from "./analytics/gtm";

import "./index.scss";

const gtmId = import.meta.env.VITE_PUBLIC_GTM_ID as string;

initGTM(gtmId);

export function App() {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import { Homepage } from "../features/homepage/Homepage";
import { AboutPage } from "../features/aboutPage/AboutPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <Homepage />,
			},
			{
				path: "/about",
				element: <AboutPage />,
			},
		],
	},
]);

export default router;

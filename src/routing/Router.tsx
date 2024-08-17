import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "./Layout";
import Homepage from "../features/homepage/Homepage";
import AboutPage from "../features/aboutPage/AboutPage";

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
			{
				path: "*",
				element: <Navigate to="/" replace />, // Redirect to homepage for non-existing routes
			},
		],
	},
]);

export default router;

import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "./Layout";
import Homepage from "../features/homepage/Homepage";
import AboutPage from "../features/aboutPage/AboutPage";
import RxtomePage from "../features/projects/rxtome/RxtomePage";

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
				path: "about",
				element: <AboutPage />,
			},
			{
				path: "*",
				element: <Navigate to="/" replace />, // Redirect to homepage for non-existing routes
			},
		],
	},
	{
		path: "/projects",
		element: <Layout />,
		children: [
			{
				path: "expopulus",
				element: <Homepage />,
			},
			{
				path: "frameonesoftware",
				element: <AboutPage />,
			},
			{
				path: "rxtome",
				element: <RxtomePage />,
			},
			{
				path: "xai-games",
				element: <AboutPage />,
			},
			{
				path: "lol-champion-viewer",
				element: <AboutPage />,
			},
		],
	},
]);

export default router;

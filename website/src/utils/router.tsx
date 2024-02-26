import { createBrowserRouter, Navigate } from "react-router-dom";
import { Homepage } from "../features/homepage/routes/Homepage";
import { Root } from "./Root";
import { AboutPage } from "../features/homepage/routes/AboutPage";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{
				path: "/",
				index: true,
				element: <Homepage />,
			},
			{
				path: "/about",
				element: <AboutPage />,
			},
		],
	},

	{
		path: "/*",
		element: (
			<Navigate
				to="/"
				replace={true}
			/>
		),
	},
]);
import { createBrowserRouter, Navigate } from "react-router-dom";
import { Homepage } from "../features/homepage/routes/Homepage";
import { Root } from "./Root";

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
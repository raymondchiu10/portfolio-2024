import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "./Layout";
import Homepage from "../features/homepage/Homepage";
import AboutPage from "../features/aboutPage/AboutPage";
import RxtomePage from "../features/projects/rxtome/RxtomePage";
import ExpopulusPage from "../features/projects/expopulus/ExpopulusPage";
import FrameOneSoftwarePage from "../features/projects/frame-one-software/FrameOneSoftwarePage";
import XaiGamgesPage from "../features/projects/xai-games/XaiGamesPage";
import LolChampionViewerPage from "../features/projects/lol-champion-viewer/LolChampionViewerPage";
import StockOverflowPage from "../features/projects/stock-overflow/StockOverflowPage";

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
				path: "stockoverflow",
				element: <StockOverflowPage />,
			},
			{
				path: "expopulus",
				element: <ExpopulusPage />,
			},
			{
				path: "frameonesoftware",
				element: <FrameOneSoftwarePage />,
			},
			{
				path: "rxtome",
				element: <RxtomePage />,
			},
			{
				path: "xaigames",
				element: <XaiGamgesPage />,
			},
			{
				path: "lolchampionviewer",
				element: <LolChampionViewerPage />,
			},
			{
				path: "*",
				element: <Navigate to="/" replace />, // Redirect to homepage for non-existing routes
			},
		],
	},
]);

export default router;

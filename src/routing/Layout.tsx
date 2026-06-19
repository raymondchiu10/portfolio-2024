import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "../shared/header/Header";
import { usePageTracking } from "../analytics/usePageTracking";

const Layout = () => {
	usePageTracking();

	return (
		<>
			<ScrollRestoration />
			<Header />
			<Outlet />
		</>
	);
};

export default Layout;

import { Outlet, ScrollRestoration } from "react-router-dom";
import { Header } from "../features/homepage/components/Header";

const Layout = () => {
	return (
		<>
			<ScrollRestoration />
			<Header />
			<Outlet />
		</>
	);
};

export default Layout;

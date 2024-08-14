import { Outlet, ScrollRestoration } from "react-router-dom";
import { Header } from "../features/homepage/components/Header";

const Layout = () => {
	return (
		<main>
			<ScrollRestoration />
			<Header />
			<Outlet />
		</main>
	);
};

export default Layout;

import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "../shared/header/Header";

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

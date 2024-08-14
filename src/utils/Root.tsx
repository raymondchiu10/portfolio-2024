import { Outlet, ScrollRestoration } from "react-router-dom";
import { Header } from "../features/homepage/components/Header";

export function Root() {
	return (
		<main>
			<ScrollRestoration />
			<Header />
			<Outlet />
		</main>
	);
}

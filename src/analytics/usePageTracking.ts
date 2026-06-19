import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { track } from "./analytics";
import { Events } from "./events";

export function usePageTracking() {
	const location = useLocation();

	useEffect(() => {
		track(Events.PAGE_VIEW, {
			page_path: location.pathname,
			page_search: location.search,
		});
	}, [location]);

	return null;
}

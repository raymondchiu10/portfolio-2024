const isBrowser = typeof window !== "undefined";

declare global {
	interface Window {
		dataLayer: Record<string, unknown>[];
	}
}

export function initGTM(gtmId: string) {
	if (!isBrowser) return;
	if (!gtmId) return;

	window.dataLayer = window.dataLayer || [];

	const script = document.createElement("script");
	script.async = true;
	script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;

	document.head.appendChild(script);

	window.dataLayer.push({
		"gtm.start": new Date().getTime(),
		event: "gtm.js",
	});
}

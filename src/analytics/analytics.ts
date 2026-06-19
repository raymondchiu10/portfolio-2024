declare global {
	interface Window {
		dataLayer: Record<string, unknown>[];
	}
}

export function track(event: string, data?: Record<string, unknown>) {
	if (typeof window === "undefined") return;

	window.dataLayer = window.dataLayer || [];

	try {
		window.dataLayer.push({
			event,
			...data,
		});
	} catch (err) {
		console.warn("GTM track failed", err);
	}
}

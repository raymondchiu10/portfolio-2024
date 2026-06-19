export const Events = {
	PAGE_VIEW: "page_view",
} as const;

export type EventType = (typeof Events)[keyof typeof Events];

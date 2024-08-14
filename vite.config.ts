/*	Note the “triple slash command” in the first line. It is needed because the Vite config interface knows nothing about Vitest, and TS does not allow redundant properties (properties not defined by the type/interface). Therefore, Vitest must extend Vite config (defined as a TS interface). */
/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";
import { VitePluginRadar } from "vite-plugin-radar";

// https://vitejs.dev/config/
export default defineConfig({
	base: "/portfolio/",
	plugins: [
		react(),
		VitePluginRadar({
			gtm: [
				{
					id: "GTM-MFV2S2JJ",
				},
			],
		}),
	],
	resolve: {
		alias: [
			{
				find: "@",
				replacement: path.resolve(__dirname, "src"),
			},
			{
				// this is required for the SCSS modules
				find: /^~(.*)$/,
				replacement: "$1",
			},
		],
	},
	server: {
		watch: {
			usePolling: true,
		},
		host: true,
		strictPort: true,
		port: 8080,
	},
	test: {
		globals: true,
		environment: "jsdom",
		setupFiles: ["src/configs/setup.ts"],
	},
});

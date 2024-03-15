import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import * as path from "path";
import { VitePluginRadar } from "vite-plugin-radar"

// https://vitejs.dev/config/
export default defineConfig({
	base: "/portfolio/",
	plugins: [
		react(),
		VitePluginRadar({
			gtm: [
				{
					id: "GTM-MFV2S2JJ",
				}
			],
		})
	],
	resolve: {
		alias: [
			{
				find: "@",
				replacement: path.resolve(__dirname, "src")
			},
			{
				// this is required for the SCSS modules
				find: /^~(.*)$/,
				replacement: "$1"
			}
		]
	},
	server: {
		watch: {
			usePolling: true
		},
		host: true,
		strictPort: true,
		port: 8080
	}
});

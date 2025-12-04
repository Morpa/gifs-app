import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";
import biomePlugin from "vite-plugin-biome";

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react(),
		biomePlugin({
			mode: "lint",
			files: "src",
			failOnError: false,
		}),
	],
	test: {
		environment: "jsdom",
		globals: true,
	},
});

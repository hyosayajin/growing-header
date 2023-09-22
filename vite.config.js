import { basename } from "path";
import { defineConfig } from "vite";

const config = {
	root: "public",
	base: "./",

	build: {
		manifest: true,
		outDir: `../dist/vite/${basename(__dirname)}`,

		rollupOptions: {
			input: "./public/app.js",
		},
	},
};

export default defineConfig(({ command, mode, ssrBuild }) => {
	if (command === "serve") {
		return config;
	} else {
		config.base = `projects/${basename(__dirname)}`;

		return config;
	}
});

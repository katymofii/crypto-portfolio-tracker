import { defineConfig } from "vite";
import { resolve } from "path";
import { ViteEjsPlugin } from "vite-plugin-ejs";

export default defineConfig({
  base: "./",
  plugins: [ViteEjsPlugin()],
  server: { port: 5173, open: true },
  preview: { port: 4173 },
  root: ".",
  build: {
    outDir: "dist",
    sourcemap: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        assets: resolve(__dirname, "assets.html"),
        assetDetails: resolve(__dirname, "asset-details.html"),
        profile: resolve(__dirname, "profile.html"),
      },
    },
  },
});

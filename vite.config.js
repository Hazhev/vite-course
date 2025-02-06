import { defineConfig } from "vite";
// оптимизация работы с графикой
import { ViteImageOptimizer } from "vite-plugin-image-optimizer"; // npm install vite-plugin-image-optimizer sharp svgo --save-dev

// векторный спрайт
import createSVGSpritePlugin from "vite-plugin-svg-spriter"; // npm i vite-plugin-svg-spriter

import { resolve } from "path";

const FRONT_PATH = "src";

export default defineConfig({
  root: "src",
  build: {
    minify: true,
    cssMinify: true,
    sourcemap: true,
    rollupOptions: {
      input: {
        index: resolve(`${FRONT_PATH}/index.html`),
        about: resolve(__dirname, `${FRONT_PATH}/html/about/index.html`),
        catalog: resolve(__dirname, `${FRONT_PATH}/html/catalog/index.html`),
      },
    },
  },
  plugins: [
    ViteImageOptimizer({
      jpg: {
        quality: 75,
      },
      png: {
        quality: 75,
      },
    }),
    createSVGSpritePlugin({
      svgFolder: resolve(__dirname, "./public"),
    }),
  ],
  resolve: {
    alias: {
      "@html": resolve(__dirname, `${FRONT_PATH}/html`),
      "@assests": resolve(__dirname, `${FRONT_PATH}/assets`),
    },
  },
});

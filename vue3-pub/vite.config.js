import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "node:url";
import vueSetupExtend from "vite-plugin-vue-setup-extend";
import sass from "sass";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const basePath = (env.VITE_BASE_PATH || "/").replace(/\/$/, "");

  return {
    base: `${basePath}/`, // ✅ Vite가 `BASE_PATH`를 자동으로 처리
    plugins: [
      vue(),
      vueSetupExtend(),
    ],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/assets/scss/common/variable" as vars;
                           @use "@/assets/scss/common/mixin" as mixin;`,
          implementation: sass,
        },
      },
    },
    build: {
      outDir: "dist",
      minify: mode === "development" ? false : "terser",
      rollupOptions: {
        input: "./index.html",
        output: {
          entryFileNames: "assets/[name]-[hash].js",
          assetFileNames: "assets/[name]-[hash][extname]",
        },
      },
      cssCodeSplit: true,
    },
    publicDir: "public",
    server: {
      port: 3000,
      strictPort: true,
      open: false,
      host: "0.0.0.0",
      https: false,
      historyApiFallback: {
        rewrites: [
          { from: new RegExp(`^${basePath}/.*$`), to: `${basePath}/index.html` },
        ],
      },
    },
    optimizeDeps: {
      include: ["vue", "vue-router"],
    },
  };
});

import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import manifestGenerator from "./scripts/manifestGenerator";
import packageJson from "./package.json";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [manifestGenerator(), preact()],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `${packageJson.name}.[name].js`,
        assetFileNames: `${packageJson.name}.[name].css`,
      },
    },
  },
});

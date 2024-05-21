import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "@colors",
        replacement: "./src/styles/_colors.scss",
      },
      {
        find: "@mixins",
        replacement: "./src/styles/_mixins.scss",
      },
      {
        find: "@medias",
        replacement: "./src/styles/constants/_medias.scss",
      },
    ],
  },
});

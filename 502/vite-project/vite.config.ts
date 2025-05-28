// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  // 👉  usa una ruta BASE ABSOLUTA
  base: "/", //  <──  esto evita el problema de /menu/assets/…
  build: {
    outDir: "dist",
  },
});

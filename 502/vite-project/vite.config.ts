import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/",
  resolve: {
    dedupe: ["react", "react-dom", "react-router-dom"], // ← evita dobles copias
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});

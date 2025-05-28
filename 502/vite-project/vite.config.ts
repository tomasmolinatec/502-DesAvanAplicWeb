import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./", // routes relativas; crucial para despliegue en subdirectorios
  build: {
    outDir: "dist", // asegúrate de que sea 'dist'
  },
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        app: path.resolve(__dirname, "index.html"),
        menucelula: path.resolve(
          __dirname,
          "src/Celula_A01784116_Tomas/menu/index.html"
        ),
        class1: path.resolve(
          __dirname,
          "src/class1/A01784116/actividad/index.html"
        ),
        menu: path.resolve(__dirname, "src/class1/A01784116/menu/index.html"),
        class2: path.resolve(__dirname, "src/class2/A01784116/index.html"),
        class3: path.resolve(__dirname, "src/class3/A01784116/index.html"),
      },
    },
    outDir: "dist", // carpeta de salida común
    emptyOutDir: true,
  },
});

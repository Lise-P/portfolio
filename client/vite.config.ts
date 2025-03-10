import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',  // Spécifie où les fichiers build seront générés
  },
  server: {
    port: 3000,
  },
});

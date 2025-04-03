import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import daisyui from "daisyui";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), daisyui()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5000/",
        secure: false,
      },
    },
  },
});

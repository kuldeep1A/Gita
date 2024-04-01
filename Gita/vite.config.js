import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  define: {
    "process.env": process.env,
  },
  plugins: [
    react({
      include: "**/*.js",
    }),
  ],
});

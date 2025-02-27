import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:5173", // Adjust if your Vite server runs on a different port
    setupNodeEvents(on, config) {
      // Implement node event listeners here if needed
    },
  },
});

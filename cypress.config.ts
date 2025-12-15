import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    viewportWidth: 2560,
    viewportHeight: 1440,
    watchForFileChanges: false,
    baseUrl: "https://automationexercise.com/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
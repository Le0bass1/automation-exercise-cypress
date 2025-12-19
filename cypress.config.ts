import { defineConfig } from "cypress";
import * as fs from "fs";
import * as path from "path";

export default defineConfig({
  e2e: {
    viewportWidth: 2560,
    viewportHeight: 1440,
    watchForFileChanges: false,
    baseUrl: "https://automationexercise.com/",
    setupNodeEvents(on, config) {
      // Clean the screenshots folder before each test
      const screenshotsFolder = path.join(__dirname, 'cypress', 'screenshots');
      if (fs.existsSync(screenshotsFolder)) {
        fs.rmSync(screenshotsFolder, { recursive: true, force: true });
      }
      
      return config;
    },
  },
});
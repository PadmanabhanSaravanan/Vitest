// playwright.config.js
import { defineConfig } from '@playwright/test';

export default defineConfig({
  webServer: {
    command: 'npm run dev', // Change this to your app's startup command
    port: 5173,             // Ensure it matches your app's port
    timeout: 120 * 1000,    // Wait up to 2 minutes
    reuseExistingServer: true, 
  },
  use: {
    headless: false, // Set to true for running tests without opening a browser
    viewport: { width: 1280, height: 720 },
  },
});
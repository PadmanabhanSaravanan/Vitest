// tests/home.test.js
import { test, expect } from '@playwright/test';

test('Home page should load correctly and display Hello from Vue!', async ({ page }) => {
  await page.goto('http://localhost:5173'); // Replace with your app URL
  // Check if the text "Hello from Vue!" is visible
  await expect(page.locator('h1')).toHaveText('Hello from Vue!');
});

import { test, expect } from '@playwright/test';
import { join } from 'path';

test('file with CSS', async ({ page }) => {
  await page.goto('file:///' + join(__dirname, 'index.html'));

  await expect(page.getByText("hi")).toHaveCSS("font-style", "italic");
});

import { test, expect } from '@playwright/test';

test('Understand Page Fixture', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');

  await expect(page).toHaveTitle('Swag Labs');

});
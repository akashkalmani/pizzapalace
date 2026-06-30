import { test, expect } from '../fixtures/baseTest';
import { loginData } from '../data/loginData';

test.beforeEach(async ({ loginPage }) => {
  console.log('Logging in...');

  await loginPage.login(
    loginData.username,
    loginData.password
  );
});

test('View Products', async ({ page }) => {
  await expect(page).toHaveURL(
    'https://www.saucedemo.com/inventory.html'
  );
});

test('Open Menu', async ({ page }) => {
  await page.locator('#react-burger-menu-btn').click();

  await expect(
    page.locator('.bm-menu')
  ).toBeVisible();
});

test('Verify Cart Icon', async ({ page }) => {
  await expect(
    page.locator('.shopping_cart_link')
  ).toBeVisible();
});


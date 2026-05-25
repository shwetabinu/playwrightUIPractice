import { test, expect } from '@playwright/test';
import {LoginPage} from '..pages/LoginPage';
import { ProductPage } from '..pages/ProductPage';

test.describe('Login Page Tests', () => {
  let loginPage;
  let productPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    productPage = new ProductPage(page);

    await loginPage.goto();
  });

    test('should login with valid credentials', async () => {
      
      await loginPage.login('standard_user', 'secret_sauce');
        // Add assertions to verify successful login, e.g., check for a specific element on the landing page
        await expect(productPage.ProductPageTitle).toBeVisible();
    });

    test('should not login with invalid credentials', async () => {
      await loginPage.login('invalid_user', 'invalid_pass');
        // Add assertions to verify error message is displayed
        await expect(loginPage.loginErrorMessage).toBeVisible();
    });

    test('should not login with empty credentials', async () => {
      await loginPage.login('', '');
        // Add assertions to verify error message is displayed
        await expect(loginPage.loginErrorMessageBlank).toBeVisible();
    });

    
});

import test, { expect } from '@playwright/test';
//  Import with explicit .js extension for module resolution
import { ProductPage } from '../pages/ProductPage.js';
import { LoginPage } from '../pages/LoginPage.js';

test.describe('Product Page Tests', () => {
  let productPage;
  let loginPage;

  test.beforeEach(async ({ page }) => {
    productPage = new ProductPage(page);
    loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
  });

  test('should display products on the product page', async () => {
    // Add assertions to verify that products are displayed on the product page
    await expect(productPage.ProductPageTitle).toBeVisible();
    await expect(productPage.productItems).toHaveCount(6); // Assuming there are 6 products
  });
  test('should display product names on the product page', async () => {
    // Add assertions to verify that product names are displayed on the product page
    const productNames = await productPage.productItemsName.allTextContents();
    expect(productNames).toContain('Sauce Labs Backpack');
    expect(productNames).toContain('Sauce Labs Bike Light');
    expect(productNames).toContain('Sauce Labs Bolt T-Shirt');
    expect(productNames).toContain('Sauce Labs Fleece Jacket');
    expect(productNames).toContain('Sauce Labs Onesie');
    expect(productNames).toContain('Test.allTheThings() T-Shirt (Red)');
  });
  test('should display product prices on the product page', async () => {
    // Add assertions to verify that product prices are displayed on the product page
    const productPrices = await productPage.productItemsPrice.allTextContents();
    expect(productPrices).toContain('$29.99');
    expect(productPrices).toContain('$9.99');
    expect(productPrices).toContain('$15.99');
    expect(productPrices).toContain('$49.99');
    expect(productPrices).toContain('$7.99');
    expect(productPrices).toContain('$15.99');
  });
  test('should display product descriptions on the product page', async () => {
    // Add assertions to verify that product descriptions are displayed on the product page
    const productDescriptions = await productPage.productItemsDescription.allTextContents();
   productDescriptions.forEach(description => console.log(description));
    expect(productDescriptions[0]).toContain('carry.allTheThings() with the sleek,');
    expect(productDescriptions[1]).toContain('A red light isn\'t the desired state in testing but it sure helps when riding your bike at night.');
  });
  test('should display product images on the product page', async () => {
    // Add assertions to verify that product images are displayed on the product page
    const productImages = await productPage.productItemsImage.count();
    expect(productImages).toBe(6); // Assuming there are 6 products with images
  });   
  test('should have add to cart buttons for each product on the product page', async () => {
    // Add assertions to verify that add to cart buttons are present for each product on the product page
    const addToCartButtons = await productPage.productItemsAddToCartButton.count();
    expect(addToCartButtons).toBe(6); // Assuming there are 6 products with add to cart buttons
  });   
});
import { test, expect } from '@playwright/test';

test.describe('End to End Tests', () => {
  let loginPage;
  let cartPage;
  let checkoutPage;
  let checkoutOverviewPage;
  let orderConfirmationPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    cartPage = new CartPage(page);
    checkoutPage = new CheckoutPage(page);
    checkoutOverviewPage = new CheckoutOverviewPage(page);
    orderConfirmationPage = new OrderConfirmation(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
  });

  test('should be able to place an order', async ({ page }) => {
    await page.click('#add-to-cart-sauce-labs-backpack');
    await page.click('.shopping_cart_link');
//    await cartPage.continueShopping();
//     await productPage.clickOnAddtoCart('Sauce Labs Bike Light');
    await cartPage.checkout();
    await checkoutPage.fillShippingDetails({
      firstName: 'John',
      lastName: 'Doe',
      zip: '12345'
    });
    await checkoutPage.clickContinueButton();
    // Add assertions to verify that the order was placed successfully, such as checking for a confirmation message or order summary   
    await checkoutOverviewPage.waitForOverviewPage();
    await checkoutOverviewPage.finishCheckout();
    await orderConfirmationPage.waitForConfirmation();
    await expect(orderConfirmationPage.confirmationMessage).toBeVisible();
  });

  

}   );
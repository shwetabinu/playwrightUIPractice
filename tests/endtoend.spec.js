import {test, expect} from '@playwright/test';
import { ProductPage } from 'pages/ProductPage';
import { LoginPage } from 'pages/LoginPage';
import { CartPage } from 'pages/CartPage';
import { CheckoutPage } from 'pages/CheckoutPage';
import { CheckoutOverviewPage } from 'pages/CheckoutOverviewPage';
import { OrderConfirmation } from 'pages/OrderConfirmation';

test.describe('End to End Tests', () => {
  let productPage;
  let loginPage;
  let cartPage;
  let checkoutPage;
  let checkoutOverviewPage;
  let orderConfirmationPage;

  test.beforeEach(async ({ page }) => {
    productPage = new ProductPage(page);
    loginPage = new LoginPage(page);
    cartPage = new CartPage(page);
    checkoutPage = new CheckoutPage(page);
    checkoutOverviewPage = new CheckoutOverviewPage(page);
    orderConfirmationPage = new OrderConfirmation(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
   // await productPage.clickOnAddtoCart('Sauce Labs Backpack');
    
  });

  test('should be able to place an order', async () => {
    // Add assertions to verify that the user can place an order successfully
   // await productPage.clickOnAddtoCart('Sauce Labs Backpack');
   await productPage.clickonShoppingCart();
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
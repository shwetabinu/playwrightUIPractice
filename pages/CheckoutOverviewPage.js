const { expect } = require('@playwright/test');

exports.CheckoutOverviewPage = class CheckoutOverviewPage {
  constructor(page) {
    this.page = page;
    this.title = page.locator('.title');
    this.itemTotalLabel = page.locator('.summary_subtotal_label');
    this.finishButton = page.getByRole('button', { name: 'Finish' });
    this.cancelButton = page.getByRole('button', { name: 'Cancel' });
  }

  async waitForOverviewPage() {
    await expect(this.title).toHaveText('Checkout: Overview');
  }

  async getItemTotal() {
    return this.itemTotalLabel.textContent();
  }

  async getTax() {
    return this.taxLabel.textContent();
  }

  async getTotal() {
    return this.totalLabel.textContent();
  }

  async finishCheckout() {
    await this.finishButton.click();
  }

  async cancelCheckout() {
    await this.cancelButton.click();
  }

  async verifyCheckoutComplete() {
    await expect(this.checkoutCompleteContainer).toBeVisible();
  }
};
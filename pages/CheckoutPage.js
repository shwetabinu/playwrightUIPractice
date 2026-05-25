
exports.CheckoutPage = class CheckoutPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.firstNameInput = page.getByRole('textbox', { name: 'First Name' });
    this.lastNameInput = page.getByRole('textbox', { name: 'Last Name' });
    this.zipInput = page.getByRole('textbox', { name: 'Zip/Postal Code ' });
    this.continueButton = page.getByRole('button', { name: 'Continue' });
    this.cancelButton = page.getByRole('button', { name: 'Cancel' });
}

  async fillShippingDetails(details) {
    await this.firstNameInput.fill(details.firstName || '');
    await this.lastNameInput.fill(details.lastName || '');
    await this.zipInput.fill(details.zip || '');

  }

  async clickContinueButton() {
    await this.continueButton.click();
  }

  async clickCancelButton() {
    await this.cancelButton.click();
  }
};

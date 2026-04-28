exports.OrderConfirmation = class OrderConfirmation {
  constructor(page) {
    this.page = page;
    this.confirmationMessage = page.getByText('Thank you for your order!');
    this.pageTitle = page.locator('.title');
    this.backHomeButton = page.getByRole('button', { name: 'Back Home' });  


  }

  async waitForConfirmation() {
    await this.confirmationMessage.waitFor();
  }


  async clickBackHome() {
    await this.backHomeButton.click();
  }
};

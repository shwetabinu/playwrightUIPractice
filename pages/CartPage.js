exports.CartPage = class CartPage {
    /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.cartItemList = page.locator('.cart_item');
    this.continueShoppingButton = page.getByRole('button', { name: 'continue-shopping' });  
    this.checkoutButton = page.getByRole('button', { name: 'checkout' });   
  }

  async visit() {
    await this.page.goto('/cart');
  }

  async getItemCount() {
    return await this.cartItemList.count();
  }

  async removeItem(itemName) {
    const item = this.page.locator(`.cart_item:has-text("${itemName}")`);
    await item.locator('button:has-text("Remove")').click();
  }

  async checkout() {
    await this.checkoutButton.click();
  }

  async continueShopping() {
    await this.continueShoppingButton.click();
  } 
};

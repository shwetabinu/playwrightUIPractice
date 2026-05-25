exports.ProductPage =class ProductPage {

  constructor(page) {
    this.page = page;
    this.ProductPageTitle = page.getByText('Products');
    this.productItems = page.locator('.inventory_item');
    this.productItemsName = page.locator('.inventory_item_name');
    this.productItemsPrice = page.locator('.inventory_item_price');
    this.productItemsDescription = page.locator('.inventory_item_desc');
    this.productItemsImage = page.locator('[id^="item_"][id$="_img_link"]');
    this.productItemsAddToCartButton = page.locator('add-to-cart-sauce-labs-backpack ');

  }
  async clickOnAddtoCart(productName) {
    this.productItemsName.filter({ hasText: productName }).locator('button').click();
  }
  async clickonShoppingCart() {
    this.page.locator('.shopping_cart_link').click();
  }
  async removeFromCart(productName) {
    this.productItemsName.filter({ hasText: productName }).locator('button').click();
  }
}

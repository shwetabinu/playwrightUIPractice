// models/LoginPage.js
exports.LoginPage = class LoginPage {
 
  constructor(page) {
    this.page = page;
    // Define locators as class properties
    this.usernameInput = page.getByRole('textbox', { name: 'Username' });
    this.passwordInput = page.getByRole('textbox', { name: 'Password' });
    this.loginButton = page.getByRole('button', { name: 'Login' });
    this.loginErrorMessage = page.getByText('Epic sadface: Username and password do not match any user in this service'); // Adjust the text as per the actual error message on the page
    this.loginErrorMessageBlank = page.getByText(   'Epic sadface: Username is required'); // Adjust the text as per the actual error message on the page
}

  async goto() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async login(user, pass) {
    await this.usernameInput.fill(user);
    await this.passwordInput.fill(pass);
    await this.loginButton.click();
  }
};

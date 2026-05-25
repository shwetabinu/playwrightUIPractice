exports.Header = class Header {
    constructor(page) {
        this.page = page;
        this.logo = page.locator('.app_logo');
        this.menuButton = page.locator('#react-burger-menu-btn');
        this.logoutButton = page.locator('#logout_sidebar_link');
    }

    async clickMenu() {
        await this.menuButton.click();
    }

    async clickLogout() {
        await this.logoutButton.click();
    }
};
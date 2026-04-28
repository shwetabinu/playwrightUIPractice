exports.Footer = class Footer {
    constructor(page) {
        this.page = page;
        this.twitterLink = page.locator('.social_twitter a');
        this.facebookLink = page.locator('.social_facebook a');
        this.linkedinLink = page.locator('.social_linkedin a');
    }

    async clickTwitter() {
        await this.twitterLink.click();
    }

    async clickFacebook() {
        await this.facebookLink.click();
    }

    async clickLinkedIn() {
        await this.linkedinLink.click();
    }
};
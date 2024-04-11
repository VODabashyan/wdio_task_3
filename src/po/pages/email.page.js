const BasePage = require("./base.page");

class EmailPage extends BasePage {
    constructor() {
        super('https://yopmail.com/')
    }

    open() {
        return browser.newWindow(this.url);
    }
}

module.exports = EmailPage;
const BasePage = require("./base.page");

class HomePage extends BasePage{
    constructor() {
        super('https://cloud.google.com/');
    }
}

module.exports = HomePage;
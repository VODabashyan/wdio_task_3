const BasePage = require("./base.page");

class CalculatorPage extends BasePage {
    constructor() {
        super('https://cloud.google.com/products/calculator-legacy?hl=es-419');
    }

    get numberOfInstancesBar() { return $("//md-tab-item[@id='tab-item-1']") }
    get numberOfInstancesInput() { return $('//input[@id="input_100"]') }
    get operatingSystemBar() { return $('#select_113') }
    get operatingSystemOption() { return $("#select_option_102") }
    get provisioningModelBar() { return $("#select_117") }
    get provisioningModelOption() { return $("//md-option[@id='select_option_115']") }
    get machineFamilyBar() { return $('#select_123') }
    get machineFamilyOption() { return $("//md-option[@id='select_option_119']/div") }
    get seriesBar() { return $("//md-select-value[@id='select_value_label_95']") }
    get seriesOption() { return $("//md-option[@id='select_option_224']") }
    get machineTypeBar() { return $("//md-select-value[@id='select_value_label_96']") }
    get machineTypeOption() { return $("//md-option[@id='select_option_474']") }
    get addGpuToggle() { return $$(".md-container.md-ink-ripple")[2] }
}   

module.exports = CalculatorPage;
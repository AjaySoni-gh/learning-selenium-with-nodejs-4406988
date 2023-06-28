const { before, beforeEach, after } = require('mocha');
const { By, Builder, Select } = require('selenium-webdriver');
const expect = require('chai').expect;

describe('sandwich order', function() {

    this.timeout(5000);
    let driver;

    before(async function() {
        driver = await new Builder().forBrowser('chrome').build();
        await driver.manage().setTimeouts({ implicit: 1000 });
    });
 
    beforeEach(async function() {
        //setup
        await driver.get('http://localhost:4200/order/sandwich');
        let title = await driver.getTitle();
        expect(title).to.equal("Order a Sandwich | BreadShop");
    });

    after(async function() {
        //teardown
        await driver.quit();
    });
 
    it('selects the bread type', async function() {
        //act
        let ryeBreadOptionElement = await driver.findElement(By.id('bread-type-rye'));
        await ryeBreadOptionElement.click();

        //assert
        let selectedElement = await driver.findElement(By.className('bread-type-value'));
        let selectedValue = await selectedElement.getText();
        expect(selectedValue).to.equal("rye bread");
    });
    
    it('selects the main filling', async function() {
        //act
        let mainFillingElement = await driver.findElement(By.id('form-select-main-filling'));
        let select = new Select(mainFillingElement);
        await select.selectByValue('tofu');

        //assert
        let selectedElement = await driver.findElement(By.className('main-filling-value'));
        let selectedValue = await selectedElement.getText();
        expect(selectedValue).to.equal("tofu");
    });
});

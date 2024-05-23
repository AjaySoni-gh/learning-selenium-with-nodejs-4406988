const { expect } = require("chai")
const {Builder, By, Select }= require("selenium-webdriver");
const {SandwichPage} = require('../page_modules/sandwichPAge');
describe("sandwich order" , function(){

    it("selects the bread type", async function(){
        this.timeout(50000);
        
        let driver =await new Builder().forBrowser('chrome').build();
      await driver.manage().setTimeouts({implicit: 10000});

      await driver.get("http://localhost:4200/order/sandwich");



//act
        let ryebread = await driver.findElement(By.id(""));                                                                   
            await ryebread.click();

            await driver.quit();
    });

});
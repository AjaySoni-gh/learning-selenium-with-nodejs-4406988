class SandwichPage{
    constructor(driver){
        this.driver=driver;
    }
    async validatePage(){
        
let title = await this.driver.getTitle();

expect(title).to.equal("");  
    }
}module.exports={ SandwichPage}
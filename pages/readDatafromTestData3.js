import {expect} from "@playwright/test"

export class DataDriven3 {
    
    constructor(page){
        this.page = page
        this.dropdown = page.locator('[id="dropdown"]')
    }

    async navigation(url){
        await this.page.goto(url)
    }

    async dropDownSelect(opt){
        await this.dropdown.selectOption(opt)

    }
    async verifySelect(opt){
        await expect(this.dropdown).toContainText(opt)
    }
}
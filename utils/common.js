import {expect} from "@playwright/test"
import {ProductcartMsg} from "../utils/constants"

export class CommonActions{
    constructor(page){
        this.page = page;

    }

    async Click(locator){
        await this.page.locator(locator).click()
    }

    async Fillaction(locator,value){
        await this.page.locator(locator).fill(value)
    }

    async waitForLocator(locator){
        await this.page.locator(locator).waitFor()
    }

    async waitForSelectors(locator){
        await this.page.waitForSelector(locator)
    }
    async tohaveUrl(value){
        await expect(this.page).toHaveURL(value)
    }

    async getText(locator){
        await this.page.locator(locator).textContent()
    }

    async isVisible(locator){
        await expect(this.page.locator(locator)).toBeVisible()
    }
    async haveText(locator1,locator2){
        await expect(this.page.locator(locator1)).toContainText(locator2)
    }

}
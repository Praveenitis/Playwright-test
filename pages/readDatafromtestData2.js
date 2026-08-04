import {expect} from "@playwright/test"

export class DataDriven2{

    constructor(page){
        this.page = page;
        this.searchbox = '[id="twotabsearchtextbox"]'
        this.searchbutton = '[id="nav-search-submit-button"]'
        
        this.searchresult = '[cel_widget_id="MAIN-SEARCH_RESULTS-4"]'
        this.searchresult2 = '[class="a-color-state a-text-bold"]'
    }

    async navigation(url){
        await this.page.goto(url)

    }

    async searchproduct(prod){
        await this.page.locator(this.searchbox).fill(prod)
        await this.page.locator(this.searchbutton).click()
    }

    async verifysearch(prod){
        await expect(this.page.locator(this.searchresult)).toBeVisible()
        await expect(this.page.locator(this.searchresult2)).toContainText(prod)
        await expect(this.page).toHaveURL(/s\?k=/);
        await expect(this.page.locator(this.searchbox)).toHaveValue(prod)
        

    }


}
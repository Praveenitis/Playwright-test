import { CommonActions } from "../utils/common";
import {expect} from "@playwright/test"
import {ProductcartMsg} from "../utils/constants"

export class productPage extends CommonActions{
    constructor(page){
        super(page)
        this.prodNameText = '[class="hrefch"]'
        this.prodName = `//a[text() = "${process.env.SELECTED_PRODUCT}"]`
        this.addToCartButton = 'text = Add to cart'

        

    }

    async printProducts(){
        await this.waitForSelectors(this.prodNameText)

        const productList = await this.page.$$(this.prodNameText)


        for (const element of productList) {
            const txt = await element.textContent()
            console.log(txt)
        }
    }

    async selectProduct(){
        await this.Click(this.prodName)
        await this.isVisible(this.addToCartButton)
    }

    async handleAlert(){
        await this.page.once('dialog', async (dialog) => {
            expect(dialog.message()).toContain(ProductcartMsg)
            await dialog.accept()
        })
        await this.Click(this.addToCartButton)
    }


}
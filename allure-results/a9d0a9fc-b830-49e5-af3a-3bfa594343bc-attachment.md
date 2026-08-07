# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\demoblaze.spec.js >> Testing Demoblaze Website >> TC_001 - Login Functionality - Positive
- Location: tests\ui\demoblaze.spec.js:9:9

# Error details

```
TypeError: expect(Product added.).toContain(undefined) // indexOf

Matcher error: expected value must be a string if received value is a string

Expected has value: undefined
Received has type:  string
Received has value: "Product added."
```

# Test source

```ts
  1  | import { CommonActions } from "../utils/common";
  2  | import {expect} from "@playwright/test"
  3  | import {productCartMsg} from "../utils/constants"
  4  | 
  5  | export class productPage extends CommonActions{
  6  |     constructor(page){
  7  |         super(page)
  8  |         this.prodNameText = '[class="hrefch"]'
  9  |         this.prodName = `//a[text() = "${process.env.SELECTED_PRODUCT}"]`
  10 |         this.addToCartButton = 'text = Add to cart'
  11 | 
  12 |         
  13 | 
  14 |     }
  15 | 
  16 |     async printProducts(){
  17 |         await this.waitForSelectors(this.prodNameText)
  18 | 
  19 |         const productList = await this.page.$$(this.prodNameText)
  20 | 
  21 | 
  22 |         for (const element of productList) {
  23 |             const txt = await element.textContent()
  24 |             console.log(txt)
  25 |         }
  26 |     }
  27 | 
  28 |     async selectProduct(){
  29 |         await this.Click(this.prodName)
  30 |         await this.isVisible(this.addToCartButton)
  31 |     }
  32 | 
  33 |     async handleAlert(){
  34 |         await this.page.once('dialog', async (dialog) => {
> 35 |             expect(dialog.message()).toContain(productCartMsg)
     |                                      ^ TypeError: expect(Product added.).toContain(undefined) // indexOf
  36 |             await dialog.accept()
  37 |         })
  38 |         await this.Click(this.addToCartButton)
  39 |     }
  40 | 
  41 | 
  42 | }
```
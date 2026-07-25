import {test, expect} from "@playwright/test"

test("Handling dropdowns" , async ({page}) => {
    //browser

    await page.goto("https://testautomationpractice.blogspot.com/");

    //scroll
    await page.locator('[id="colors"]').scrollIntoViewIfNeeded()

    //selectoption - multiple
    await page.locator('[id="colors"]').selectOption(["Red", "Blue", "Green", "Yellow"])
    await page.waitForTimeout(3000)

    //UNSELECT
    await page.locator('[id="colors"]').selectOption([])
    await page.waitForTimeout(3000)

    //TO SELECT DUPLICATE VALUES ALSO IF AVAILABLE
    await page.locator('[id="colors"]').selectOption([{label: "Red"}, {value:"green"},{index:4},{index:6}])
    await page.waitForTimeout(3000)





})

test.only("Dynamic Dropdown Handle" , async ({page}) => {

    await page.goto("https://www.amazon.in/")

    //wait
    await page.waitForLoadState('load')

    //searchbar filling

    await page.locator('[id="twotabsearchtextbox"]').fill("Mobiles")
    await page.waitForSelector('[class="two-pane-results-container"]')

    //suggestion capture
    const list = await page.$$('//div[@class="two-pane-results-container"]//div[@class="s-suggestion-container"]//div/span')
    
    for(const element of list){
        const text = await element.textContent()

        if(text.includes(30000)){
            await element.click()
            break;
        }
    }
})  
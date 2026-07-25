import {test, expect} from "@playwright/test"

//Test - create test scripts
//expect - take assertions

test("Handling Webpage", async function ({page}){

    //browser
    await page.goto("https://www.flipkart.com/");

    //TITLE AND URL
    const pageTitle = await page.title()
    console.log(pageTitle)

    console.log(await page.url())

    //ASSERT 
    await expect(page).toHaveTitle("Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!")
    await expect(page).toHaveURL("https://www.flipkart.com/")

    //call expect.soft(page).toHaveTitle for soft assertion



    //LOCATORS
    


    //npx playwright test firstTest.spec.js --project=chromium --headed


})
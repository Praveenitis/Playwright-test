import {test , expect} from "@playwright/test"
test("Handling Login form", async function({page}){
    //browser
    await page.goto("https://www.demoblaze.com/")

    //click
    await page.locator('[id="login2"]').click()
    //fill
    await page.locator('[id="loginusername"]').fill("Raviteja18")
    await page.locator('[id="loginpassword"]').fill("Trend@123")

    //btn click
    await page.locator('//button[text()="Log in"]').click()

     //ASSERTION
    await expect(page.locator('//a[text() = "Welcome Raviteja18"]')).toBeVisible()

    //Print Product List
    const products = await page.locator('//a[@class="hrefch"]').allTextContents()

    console.log(products)

    //Logout Session
    await page.locator('[id="logout2"]').click()

    //ASSERTION FOR LOGOUT
    await expect(page.locator('[id="login2"]')).toBeVisible()





    







})
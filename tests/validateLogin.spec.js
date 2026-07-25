import {test, expect} from "@playwright/test"


test("Validating Login Functionality(POSIITVE)", async function ({page}){

    //browser
    await page.goto("https://www.saucedemo.com/");

    //TITLE AND URL
    const pageTitle = await page.title()
    console.log(pageTitle)

    console.log(await page.url())


    //ASSERTION
    await expect(page).toHaveTitle("Swag Labs")
    await expect(page).toHaveURL("https://www.saucedemo.com/")


    //USERNAME
    await page.locator('#user-name').fill('standard_user') // Targets the username block and fills "Standard-user"

    //PASSWORD
    await page.locator('#password').fill('secret_sauce') // Targets the password block and fills "secret_sauce"

    //LOGIN
    await page.locator('#login-button').click() //targets the login button and clicks it

    await page.waitForTimeout(3000)



    //ASSERTION AFTER LOGIN
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")
    await expect(page.locator('[class="app_logo"]')).toBeVisible()
    await expect(page.locator('[class="title"]')).toBeVisible()
 

    //call expect.soft(page).toHaveTitle for soft assertion


})
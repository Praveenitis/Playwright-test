import {test, expect} from "@playwright/test"

test ("Handling login functions", async function ({page}){

    //browser
    await page.goto("https://practicetestautomation.com/practice-test-login")

    //Page title
    var pageTitle = await page.title()
    console.log(pageTitle)

    //URL
    console.log(await page.url())

    //ASSERTION
    await expect(page).toHaveTitle("Test Login | Practice Test Automation")
    await expect(page).toHaveURL("https://practicetestautomation.com/practice-test-login/")

    //USERNAME
    await page.locator('[id="username"]').fill('student')

    //password
    await page.locator('[id="password"]').fill('Password123')

    //login button
    await page.locator('[class="btn"]').click()

    //ASSERTION AFTER LOGIN
    await expect(page).toHaveURL('https://practicetestautomation.com/logged-in-successfully/')
    await expect(page.locator('[class="post-title"]')).toBeVisible()
    await expect(page.locator('[class="wp-block-button__link has-text-color has-background has-very-dark-gray-background-color"]')).toBeVisible()





} )
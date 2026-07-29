import {test, expect} from "@playwright/test"

test("Practise CSS Selectors", async function({page}) {
    await page.goto("https://practicetestautomation.com/practice-test-login/")


    await page.locator('#username').fill('student')  // ID
    await page.locator("#password").fill('Password123') // CLASS
    await page.locator('.btn').click() // PROPERTY
    

    page.waitForLoadState()

    await expect (page.locator('[class^="wp-block-button__link"]')).toBeVisible() //PREFIX
    await expect  (page.locator('[class$="-credit"]')).toBeVisible() //SUFFIX
    await expect (page.locator('[class*="text-color has-background has-very-dark-gray-"]')).toBeVisible()
    //SUBSTRING


    await page.locator()





})


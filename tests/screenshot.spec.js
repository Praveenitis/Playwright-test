import {test} from "@playwright/test"

test("Visible page screenshot", async ({page}) => {

    //browser

    await page.goto("https://www.amazon.in/")

    //wait

    await page.waitForTimeout(3000)

    //screenshot

    await page.screenshot({path : "images" + "/visiblePage.png"})
})

test("Visible full page screenshot", async ({page}) => {

    //browser

    await page.goto("https://www.amazon.in/")

    //wait

    await page.waitForTimeout(3000)

    //screenshot

    await page.screenshot({path : "images" + "/FullPage.png", fullPage : true})
})


test.only("Visible screenshot using locator", async ({page}) => {

    //browser

    await page.goto("https://www.amazon.in/")

    //wait

    await page.waitForTimeout(3000)

    //screenshot

    await page.locator('[id="nav-logo-sprites"]').screenshot({path : "images" + "/Locator.png"})
})
import {test , expect} from "@playwright/test"

test("builtIn Locators", async function ({page}){

    //browser
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    
    //img validation
    var orangelogo = await page.getByAltText("company-branding")
    await expect(orangelogo).toBeVisible()

    //input- placeholder
    await page.getByPlaceholder("Username").fill("Admin")
    await page.getByPlaceholder("Password").fill("admin123")

    //Login button - role

    await page.getByRole("button", {name : "Login"} ).click()

    

    //load 

    await page.waitForLoadState()



    await expect(page).toHaveURL(/dashboard/);

    await page.waitForTimeout(5000)

    await expect(
    page.getByRole("heading", { name: "Dashboard" })
).toBeVisible();


//TEXT
const username = await page.locator('[class="oxd-userdropdown-name"]').textContent()
await expect(page.getByText(username)).toBeVisible()



//LABEL
await expect(page.getByLabel('Sidepanel')).toBeVisible()


//TITLE
const [newPage] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByTitle('Help').click()
])

await page.waitForLoadState()  // we are waiting for the page to load

await newPage.getByPlaceholder('Search').fill('Playwright with javascript')

await page.waitForTimeout(3000)



    

    

})
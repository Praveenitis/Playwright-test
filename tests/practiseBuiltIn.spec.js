import {test, expect} from "@playwright/test"

test("Practising builtInLocators", async function ({page}) {

    //browser
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    //Image validation
    var logo = await page.getByAltText("company-branding")
    await expect(logo).toBeVisible()

    //Username
    await page.getByPlaceholder("Username").fill("Admin")  //用户名

    //password
    await page.getByPlaceholder("Password").fill("admin123") //密码

    //Loginbutton click
    await page.getByRole("button", {name :  " Login "}).click()  // 登录

    await page.waitForLoadState()

    

    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")

    //Upgrade button check

    const [newPage] = await Promise.all([
        page.waitForEvent('popup'),
         
     page.locator('[class="orangehrm-upgrade-link"]').click()

         

    ])

    await page.waitForTimeout(3000)

    await newPage.getByRole("textbox",{name : 'Full Name*'}).fill("Praveen G U")
    await newPage.getByPlaceholder("Work Email*").fill("praveengu19@gmail.com")
    await newPage.getByPlaceholder("Phone Number*").fill("123456789")
    await newPage.getByPlaceholder("Your Full Name*").fill("Praveen G U")
    await newPage.getByPlaceholder("Job Title*").fill("Automation")




    

    



    








})


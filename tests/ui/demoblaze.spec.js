import { LoginPage } from "../../pages/LoginPage";
import {test,expect,chromium, firefox,webkit} from "@playwright/test"
import { productPage } from "../../pages/productPage"; 

import { CommonActions } from "../../utils/common";

test.describe("Testing Demoblaze Website" , async () => {

    test("TC_001 - Login Functionality - Positive" , async ({}) => {

        const browser = await chromium.launch({slowMo : 1500, channel : 'chrome'})
        const context = await browser.newContext()
        const page = await context.newPage()

            let loginpage = new LoginPage(page)

            await loginpage.navigate()
            await loginpage.login(process.env.USER_NAME,process.env.PASSWORD)
            await loginpage.verifyDashboard()

            let prodpage = new productPage(page)

            await prodpage.printProducts()
            await prodpage.selectProduct()
            await prodpage.handleAlert()





    })



})


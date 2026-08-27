import {test, expect} from "@playwright/test"

test("Handling Register form", async function({page}){

    await page.goto("https://testautomationpractice.blogspot.com/")


    //wait for
    await page.locator('//a[text()="Data Entry Form"]').waitFor({state : 'visible'})


    //fill
    await page.locator('//input[@id="name"]').fill("Praveen G U")
    await page.locator('//input[@id="email"]').fill("praveengu19@gmail.com")
    await page.locator('//input[@id="phone"]').fill("123456789")
    await page.locator('//textarea[@id="textarea"]').fill("Porur")

    await page.waitForTimeout(1500)

    //radio
    await page.locator('[id="male"]').check()  // for ratio button we use check
    await page.waitForTimeout(1500)

    //assert for radio

    await expect(page.locator('[id="male"]')).toBeChecked()


    //CHECKBOX
    await page.locator('[id="sunday"]').check()
    await expect(page.locator('[id="sunday"]')).toBeChecked()

    await page.waitForTimeout(1500)

    //MULTI CHECKBOX

    const multiCheck = [ page.locator('[id = tuesday]'), page.locator('//input[@id="thursday"]'), page.locator("id=saturday")]

     //CHECK
    for(let mc of multiCheck){
        await mc.check()
        await expect (mc).toBeChecked()
        await page.waitForTimeout(1500)

    }

    //UNCHECK
    for(let mc of multiCheck){
        await mc.uncheck()
        await expect (mc).not.toBeChecked()
        await page.waitForTimeout(1500)
        
    }


    //dropdown (select option not used in many websites)

      })

    test("Handling dropdown", async({page})=>{

        await page.goto("https://testautomationpractice.blogspot.com/")

        //scroll
        await page.locator('text=Country:').scrollIntoViewIfNeeded()
        await page.waitForTimeout(1500)

        //Visible Text
        await page.locator('[id="country"]').selectOption("India")
        await page.waitForTimeout(1500)

        //Label
         await page.locator('[id="country"]').selectOption({label : "China"})
          await page.waitForTimeout(1500)

        //Value
           await page.locator('[id="country"]').selectOption({value : "australia"})
           await page.waitForTimeout(1500)


        //INDEX

         await page.locator('[id="country"]').selectOption({index : 5})
        await page.waitForTimeout(1500)

        //ASSERT

        
        await expect((await page.$$('//select[@id="country"]//option')).length).toBe(10)


        

      

        
        

        










  

    


    











})


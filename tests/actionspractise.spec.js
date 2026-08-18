import {test, expect} from "@playwright/test"

test("actionspractise", async function ({page}) {

    await page.goto("https://demoqa.com/automation-practice-form")

    await page.locator('//h1[text() = "Practice Form"]').waitFor({state: 'visible'})

    //fill

    await page.locator('[id="firstName"]').fill("Praveen")
    await page.locator('[id="lastName"]').fill("Kumar")
    await page.locator('[id="userEmail"]').fill("praveengu19@gmail.com")
    await page.locator('[id="gender-radio-1"]').check()

    await page.waitForTimeout(1500)
 

    await page.locator('[id="userNumber"]').fill("1234567890")

    //DATE OF BIRTH

    //Method 1

    await page.locator('[id="dateOfBirthInput"]').fill("15 Jul 2026")

    //Method 2 

    await page.locator('[id="dateOfBirthInput"]').click() 
    await page.locator('//select[@class="react-datepicker__month-select"]').selectOption("6")
    await page.locator('//select[@class="react-datepicker__year-select"]').selectOption("2007")
    await page.locator('//div[@class="react-datepicker__day react-datepicker__day--031"]').click()






    //SUBJECT
    await page.locator('[id="subjectsInput"]').fill("Hello Team!")

    await page.waitForTimeout(1500)

    //HOBBIES - MULTIPLE

    const multiCheck = [page.locator('[id="hobbies-checkbox-1"]') , page.locator('[id="hobbies-checkbox-2"]')]

    for(let mc of multiCheck){
        mc.check()
        await expect(mc).toBeChecked()
         await page.waitForTimeout(1500)

    }

    //DROPDOWN

    await page.locator("//div[@class='css-19bb58m']").click()
    await page.locator("//div[text() = 'Rajasthan']").click()

    await page.waitForTimeout(1500)

    await page.locator("//div[@id='city']").click();
    await page.locator("//div[text() = 'Jaipur']").click() 



    //submit

    await page.locator('[id="submit"]').click()

    //Check for next page visibility
    await page.locator('//div[text()="Thanks for submitting the form"]').waitFor({state : 'visible'})



















})
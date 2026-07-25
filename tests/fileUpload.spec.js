import {test, expect} from "@playwright/test"

test("File Upload Handle", async ({page}) => {

    //browser

 await page.goto("https://testautomationpractice.blogspot.com/")

 //scroll
 await page.locator('[id="singleFileInput"]').scrollIntoViewIfNeeded()

 //upload file (Single file)

 await page.locator('[id="singleFileInput"]').setInputFiles('C:/Users/ADMIN/Downloads/Praveen EEE.pdf')
 await page.waitForTimeout(3000)

 //Multiple Files
 await page.locator('[id="multipleFilesInput"]').setInputFiles(['C:/Users/ADMIN/Downloads/AARDHAR.pdf','C:/Users/ADMIN/Downloads/cheque.pdf'])
 await page.waitForTimeout(5000)




})
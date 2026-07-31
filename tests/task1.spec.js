import {test , expect} from "@playwright/test"
test("Handling E-commerce flow", async function({page}){
    //browser
    await page.goto("https://www.demoblaze.com/")
    //click
    await page.locator('[id="login2"]').click()
    //fill
    await page.locator('[id="loginusername"]').fill("Raviteja18")
    await page.locator('[id="loginpassword"]').fill("Trend@123")
    //btn click
    await page.locator('//button[text()="Log in"]').click()
     //ASSERTION
    await expect.soft(page.locator('//a[text() = "Welcome Raviteja18"]')).toBeVisible()
    //Print Product List
    const products = await page.locator('//a[@class="hrefch"]').allTextContents()
    console.log(products)
    // Select a product 
    await page.locator('//a[text() = "Samsung galaxy s6"]').click()
    await expect.soft(page.locator('//h2[text()="Samsung galaxy s6"]')).toBeVisible()
    //ADD TO CART
    await page.locator('[onclick="addToCart(1)"]').click()
    await page.locator('[id="cartur"]').click()
    await expect.soft(page.locator('[class="btn btn-success"]')).toBeVisible()
    //PLACE ORDER
    await page.locator('[class="btn btn-success"]').click()
    await expect.soft(page.locator('[id="orderModalLabel"]')).toBeVisible()
    //Order form filling
    await page.locator('[id="name"]').fill("Praveen")
    await page.locator('[id="country"]').fill("India")
    await page.locator('[id="city"]').fill("Chennai")
    await page.locator('[id="card"]').fill("1234 5678 9876 4321")
    await page.locator('[id="month"]').fill("January")
    await page.locator('[id="year"]').fill("2026")
    //purchase
    await page.locator('[onclick="purchaseOrder()"]').click()
    await expect.soft(page.locator('//h2[text() = "Thank you for your purchase!"]')).toBeVisible()
    await page.locator('//button[text() = "OK"]').click()




   





    







})
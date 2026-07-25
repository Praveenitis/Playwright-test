import {test, expect} from "@playwright/test"

test("Mouse Hover Handle", async ({page}) => { 

       //browser
    await page.goto("https://testautomationpractice.blogspot.com/")

    //scroll

    await page.locator('[class="dropbtn"]').scrollIntoViewIfNeeded()

    //hover
    await page.locator('[class="dropbtn"]').hover()
    await page.waitForTimeout(2000)

    //click

    await page.locator('//a[text()="Laptops"]').click()



})

test("Mouse doubleClick", async ({page}) => { 

       //browser
    await page.goto("https://testautomationpractice.blogspot.com/")

    //scroll

    await page.locator('[id="field1"]').scrollIntoViewIfNeeded()

    //clear
    await page.locator('[id="field1"]').clear()
    await page.waitForTimeout(2000)

    //fill

    await page.locator('[id="field1"]').fill('Praveen')


    //click

    await page.locator('//button[text()="Copy Text"]').dblclick()

    //expect

    await expect (page.locator('[id="field2"]')).toHaveText('Praveen') //it wont work in demo website






})


test("Mouse Drag-Drop", async ({page}) => { 

       //browser
    await page.goto("https://testautomationpractice.blogspot.com/")

    //scroll

    await page.locator('[id="droppable"]').scrollIntoViewIfNeeded()

    //approach 1
    await page.dragAndDrop('[id="draggable"]','[id="droppable"]')
    await page.waitForTimeout(2000)

    //approach 2

    const source = page.locator('[id="draggable"]')
    const target = page.locator('[id="droppable"]')

    await source.dragTo(target)
     await page.waitForTimeout(2000)


    //approach 3

    await source.hover()
    await page.mouse.down() //for movement any side

    await target.hover()  //target hover panni using mouse.up() we release

    await page.mouse.up() //release
     await page.waitForTimeout(2000)


})


test("Keyboard action", async ({page}) => { 

       //browser
    await page.goto("https://testautomationpractice.blogspot.com/")

    //scroll

   // await page.locator('[id="name"]').scrollIntoViewIfNeeded()

    //Name
    await page.locator('[id="name"]').fill('Praveen')
    await page.waitForTimeout(2000)

    //select
    await page.keyboard.press('Control+KeyA')
    await page.waitForTimeout(2000)

    //copy
    await page.keyboard.press('Control+KeyC')
    await page.waitForTimeout(2000)

    //next tab
    await page.keyboard.down('Tab')
    await page.keyboard.up('Tab')
    await page.waitForTimeout(2000)


    //paste

    await page.keyboard.press('Control+KeyV')
    await page.waitForTimeout(2000)





})


test.only("Slider", async ({page}) => { 

       //browser
    await page.goto("https://testautomationpractice.blogspot.com/")

    //scroll

   await page.mouse.wheel(0,1800)
   await page.waitForTimeout(2000)

   //approach 1 

   const leftSlider = await page.locator('[style="left: 15%;"]')

   //const box = await leftSlider.boundingBox()

   //await page.mouse.move(box.x, box.y + box.height/2)

   //await page.mouse.down()

   //await page.mouse.move(box.x + box.width, box.y + box.height/2)
   //await page.mouse.up()
   //await page.waitForTimeout(5000)

   //approach 2 

   await leftSlider.click()

   for(let i=0;i<50;i++){
    await page.keyboard.press('ArrowRight')
   }

   await page.waitForTimeout(5000)






})



 
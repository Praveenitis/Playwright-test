import {test, expect} from "@playwright/test"

test("Tables Handle", async ({page}) => { 

    //browser
    await page.goto("https://testautomationpractice.blogspot.com/")

        //scroll

        await page.locator('[id="productTable"]').scrollIntoViewIfNeeded()
        await page.waitForTimeout(3000)

    //count of columns

    const tableColumns = await page.$$('[id="productTable"]>thead>tr>th')
    console.log(await tableColumns.length)

    //count rows
    const tableRows = await page.locator('[id="productTable"]>tbody>tr')
    console.log(await tableRows.count())

    //1. SELECT PRODUCT

    const selectProduct = await tableRows.filter({
        has: page.locator('td'),
        hasText: "Tablet"
    })

    await selectProduct.locator('input').click()
    await page.waitForTimeout(3000)

    //2.SELECT MULTI PRODUCT

    async function multiProd(prodName){
        const selectProduct = await tableRows.filter({
            has:page.locator('td'),
            hasText: prodName
        })

        await selectProduct.locator('input').click()
    }

    await multiProd("Smartphone")
    await multiProd("Wireless Earbuds")
    await page.waitForTimeout(3000)
    


    //3. print first page product list

    for(let i=0;i<await tableRows.count();i++){ //row count i<5
        const tds = await tableRows.nth(i).locator('td')

        for(let j=0;j<await tds.count();j++){      //column count j<20
            const txt = await tds.nth(j).textContent()
            console.log(txt)
        }
    }

    //4Print all pages list

    const tablePages = await page.locator('[id="pagination"] li a')

    for(let k=0;k<await tablePages.count();k++){
        if(k>0){
            await tablePages.nth(k).click()
        }

        const prods = await page.$$('[id="productTable"]>tbody>tr>td')

        for (const element of prods) {

            const text = await element.textContent()
            console.log(text)
            
        }
    }

    //PICK A PRODUCT FROM PAGE 3 

    const tablePages3 = await page.locator('[id="pagination"] li a')

    for(let k=0;k<await tablePages3.count();k++){
        if(k>0){
            await tablePages3.nth(k).click()
        }

        if(k==2){

             const prods = await page.$$('[id="productTable"]>tbody>tr')

        for (const element of prods) {

                const text = await element.textContent()
                if(text.includes('Router')){
                    const cells = await element.$$('td')

                    for (const cell of cells) {

                        const txtdata = await cell.textContent()
                        console.log(txtdata)
                        
                    }
            
                }

            

            
            
        }
    }


        }

    //DYNAMIC TABLE DATA PRINT



       



})

test.only("Dynamic Table" , async({page}) => {

    //browser
    await page.goto("https://testautomationpractice.blogspot.com/")

        //scroll

        await page.locator('[id="taskTable"]').scrollIntoViewIfNeeded()
        await page.waitForTimeout(3000)

    const tableColumns = await page.$$('[id="taskTable"]>thead>tr>th')
    console.log(await tableColumns.length)

    //count rows
    const tableRows = await page.locator('[id="taskTable"]>tbody>tr')
    console.log(await tableRows.count())

    //SELECTING particlar element from DYnmaic table

    const prods = await page.$$('[id="taskTable"]>tbody>tr')

        for (const element of prods) {

                const text = await element.textContent()
                if(text.includes('System')){
                    const cells = await element.$$('td')

                    for (const cell of cells) {

                        const txtdata = await cell.textContent()
                        console.log(txtdata)
                        
                    }
            
                }
            }




   






})
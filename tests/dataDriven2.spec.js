import {test,expect} from "@playwright/test"

const {DataDriven2} = require("../pages/readDatafromtestData2")

 const {amazon} = require("../testData/testData2.json")


 amazon.forEach((data)=> {

    test(`Validating Search Functionality ${data.products}` , async ({page}) => {

        let search = new DataDriven2(page)

        await search.navigation(process.env.BASE_URL2)
        await search.searchproduct(data.products)

        await search.verifysearch(data.products)


    })


 })




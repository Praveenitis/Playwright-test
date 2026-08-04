import {test,expect} from "@playwright/test"

  const {dropdown} = require("../testData/testData3.json")
   const {DataDriven3}= require("../pages/readDatafromTestData3")


   dropdown.forEach((data) => {

    test(`Validating DropDown Functionality ${data.options}` , async ({page}) => {

        let drop = new DataDriven3(page)

        await drop.navigation(process.env.BASE_URL3)
        await drop.dropDownSelect(data.options)

        await drop.verifySelect(data.options)


    })


 })
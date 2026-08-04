import fs, { read } from "fs"
import path from "path"
import {parse} from "csv-parse/sync" //parse is a block or function so we give brackets
import {test,expect} from "@playwright/test"
import { DataDriven } from "../pages/readDatafromtestData1"

const readCSV = parse(fs.readFileSync("testData/testData.csv"), {

    columns : true,
    skip_empty_lines:true,
    skip_records_with_empty_values:true,
    //delimiter : ";"
})


readCSV.forEach((data) => {

    test(`Validating CSV to DataDriven ${data.ID}` , async ({page}) => {

    let login = new DataDriven(page) // object for the class
    
    await login.navigate(process.env.BASE_URL) // to inject data from env file

    await login.loginCredentials(data.USERNAME,data.PASSWORD) // extract data from testdata file,we use index numbers since we saved data in arrays.
    await login.verifyDashboard() //assertion method
    })
})

import path from "path"
import xlsx from "xlsx"

import {test,expect} from "@playwright/test"

import { DataDriven } from "../pages/readDatafromtestData1"

const readXl = path.join("testdata/testdata4.xlsx")
const workbook = xlsx.readFile(readXl)
const worksheet = workbook.Sheets["Sheet1"]
const xl = xlsx.utils.sheet_to_json(worksheet)

xl.forEach((data) => {

    test(`Validating Excel to DataDriven ${data.ID}` , async ({page}) => {

    let login = new DataDriven(page) // object for the class
    
    await login.navigate(process.env.BASE_URL) // to inject data from env file

    await login.loginCredentials(data.USERNAME,data.PASSWORD) // extract data from testdata file,we use index numbers since we saved data in arrays.
    await login.verifyDashboard() //assertion method
    })
})




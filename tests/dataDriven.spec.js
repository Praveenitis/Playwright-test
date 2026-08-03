import {test, expect} from "@playwright/test"

const {DataDriven} = require('../pages/readDatafromtestData1')
const {demoblaze} = require('../testData/testData1.json')





    demoblaze.forEach((data) => {

    test(`Validating JSON to DataDriven ${data.username}` , async ({page}) => {

    let login = new DataDriven(page) // object for the class
    
    await login.navigate(process.env.BASE_URL) // to inject data from env file

    await login.loginCredentials(data.username,data.password) // extract data from testdata file,we use index numbers since we saved data in arrays.
    await login.verifyDashboard()
    })



    //await login.navigate(process.env.BASE_URL) // to inject data from env file

    //await login.loginCredentials(demoblaze[0].username,demoblaze[0].password) // extract data from testdata file,we use index numbers since we saved data in arrays.
    //await login.verifyDashboard()




})
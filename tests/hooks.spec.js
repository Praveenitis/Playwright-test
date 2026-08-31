/**
 * before each - it will execute each test script before
 * before all - it will execute all test script before
 * after each - it will execute each test script after
 * after all - it will execute all test script before
 */

import {test} from "@playwright/test"

//test.beforeEach(async ({browser}) => {

    //browser
   // const context = await browser.newContext()  // incognito mode session
  //  const page = await context.newPage()  // represent a single tab 

    //login
   // await page.goto("/")
//})

test("test1", async() => {
    console.log("TEST1")
})

test("test2", async() => {
    console.log("TEST2")
})

test("test3", async() => {
    console.log("TEST3")
})


test.beforeEach(async()=>{
    console.log("Before each")
})

test.afterEach(async()=>{
    console.log("After each")
})

test.beforeAll(async()=>{
    console.log("Before all")
})

test.afterAll(async()=>{
    console.log("After All")
})
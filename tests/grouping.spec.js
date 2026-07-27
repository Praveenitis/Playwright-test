import {test} from "@playwright/test"

test.describe("Group 1", async() => {

    test("test 1", async() => {

    console.log("Login positive")
})

test("test 2", async() => {

    console.log("Login negative")
})

test("test 3", async() => {

    console.log("Login edge")
})


})

test.describe.parallel("Group 2", async() => {

    
test("test 4", async() => {

    console.log("add to cart positive")
})

test("test 5", async() => {

    console.log("add to cart negative")
})

test("test 6", async() => {

    console.log("add to cart edge")
})


})


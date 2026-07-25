import {test, expect} from "@playwright/test"

test.only("Test 1", async function({page}){ // only this test will run
    console.log("only")


})

test("Test 2", async function({page}){  //skips this test and run other ones
     console.log("skip")

    


})

test("Test 3", async function({page}){  // Forcibly fail even it has no errors
     console.log("fail")

    


})

test("Test 4", async function({page}){  //Temprory skip, used when we want to change code later on

     console.log("fixme")


})

test("Test 5", async function({page}){  //makes execution time as 3x the normal time (90 sec)

     console.log("slow")

    

})

test("Test 6", async function({page}){ //we can use it inside test block , just to extend time
    test.setTimeout(12*1000)
     console.log("set timeout")



})

test("Test 7", async function({page}){ //condition based, edachu condition kuduthu skip or slow pandrathu

     console.log("condition")

    
})
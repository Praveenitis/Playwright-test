import {test} from "@playwright/test"

test("Test 1", {tag: "@smoke"},async function({page}){
    console.log("smoke")


})

test("Test 2", {tag: "@sanity"},async function({page}){
    console.log("SANITY")


})

test("Test 3 @reg", async function({page}){
    console.log("REG")


})

test("Test 4 @smoke@sanity", async function({page}){
    console.log("smoke with sanity")


})

test("Test 5", {tag: "@smoke@reg"}, async function({page}){
    console.log("smoke with reg")


})

test("Test 6", {tag: "@sanity@reg"}, async function({page}){
    console.log("sanity with reg")


})
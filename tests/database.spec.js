import {test, expect} from "@playwright/test"
import {executeQuery} from "../utils/db"


test.skip("Handling Database", async ({}) => {

    const createTable = await executeQuery(`CREATE TABLE finaldb 
        (ID INT Primary Key auto_increment,
        NAME VARCHAR(50) NOT NULL

    );`)

    console.log(createTable)
    
})

test.skip("Insert data into database", async ({}) => {

    const insertQuery =  `INSERT INTO finaldb (NAME)
    VALUES (?),(?),(?)
    `;

    const result = await executeQuery(insertQuery,["Praveen","Ravi","Mukesh"]);

    console.log(result)
})

test ("get specific record", async ({}) => {

    const result = await executeQuery(`SELECT * FROM finaldb
        WHERE ID = ?
        `,[2]);

    import {test, expect} from "@playwright/test"
import {executeQuery} from "../utils/db"


test.skip("Handling Database", async ({}) => {

    const createTable = await executeQuery(`CREATE TABLE finaldb 
        (ID INT Primary Key auto_increment,
        NAME VARCHAR(50) NOT NULL

    );`)

    console.log(createTable)
    
})

test.skip("Insert data into database", async ({}) => {

    const insertQuery =  `INSERT INTO finaldb (NAME)
    VALUES (?),(?),(?)
    `;

    const result = await executeQuery(insertQuery,["Praveen","Ravi","Mukesh"]);

    console.log(result)
})

test ("get specific record", async ({}) => {

    const result = await executeQuery(`SELECT * FROM finalbd 
        WHERE ID = ?
        `,[2]);

    
})
})
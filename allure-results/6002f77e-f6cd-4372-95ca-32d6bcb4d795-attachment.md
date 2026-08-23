# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: database.spec.js >> get specific record
- Location: tests\database.spec.js:28:5

# Error details

```
Error: Table 'empdb.finalbd' doesn't exist
```

# Test source

```ts
  1  | import mysql from "mysql2/promise";
  2  | 
  3  | 
  4  | 
  5  |     const pool = mysql.createPool({
  6  |         host: 'localhost',
  7  |         port : 3306,
  8  |         user : 'root',
  9  |         password : 'Indiaa*83',
  10 |         database : 'empdb',
  11 |         connectionLimit : 10
  12 | 
  13 |     });
  14 | 
  15 |     export async function executeQuery(query, params = []){
> 16 |         const [rows] = await pool.execute(query, params);
     |                                   ^ Error: Table 'empdb.finalbd' doesn't exist
  17 |         return rows;
  18 |     }
  19 | 
```
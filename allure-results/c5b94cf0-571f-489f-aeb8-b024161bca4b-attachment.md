# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: API.spec.js >> GET-AUTH REQ
- Location: tests\API.spec.js:42:5

# Error details

```
SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON
```

# Test source

```ts
  1  | import {test, expect, request} from "@playwright/test"
  2  | 
  3  | let token;
  4  | 
  5  | test.skip("GET - REQ", async ({}) => {
  6  |     const apiRequestContext = await request.newContext()
  7  | 
  8  |     const response = await apiRequestContext.get(process.env.API_BASE_URL + "/users")
  9  | 
  10 |     const body = await response.json()
  11 |     console.log(body)
  12 | 
  13 |     expect(response.status()).toBe(200)
  14 | 
  15 | 
  16 | })
  17 | 
  18 | test.skip("POST - REQ", async ({}) => {
  19 |     const apiRequestContext = await request.newContext()
  20 | 
  21 |     const response = await apiRequestContext.post(process.env.API_BASE_URL + "/user/login", 
  22 |         {
  23 |             data : {
  24 |                 username : process.env.USERNAMEAPI,
  25 |                 password : process.env.PASSWORDAPI
  26 |             },
  27 |             headers : {
  28 |                 "Content-Type" : "application/json"
  29 |             }
  30 |         }
  31 |     )
  32 | 
  33 |     const body = await response.json()
  34 |     console.log(body)
  35 |     token = await body.accessToken
  36 | 
  37 |     expect(response.status()).toBe(200)
  38 | 
  39 | 
  40 | })
  41 | 
  42 | test("GET-AUTH REQ", async () => {
  43 | 
  44 |       const apiRequestContext = await request.newContext()
  45 | 
  46 |        const response = await apiRequestContext.post(process.env.API_BASE_URL + "/user/me", 
  47 |         {
  48 |             headers : {
  49 |                 "Authorization" : `Bearer ${token}`,
  50 |                 "Content-Type" : "application/json"
  51 | 
  52 |             }
  53 |         }
  54 |     )
  55 | 
> 56 |      const body = await response.json()
     |                   ^ SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON
  57 |     console.log(body)
  58 |     expect(response.status()).toBe(200)
  59 | 
  60 | 
  61 | 
  62 | 
  63 | 
  64 | })
```
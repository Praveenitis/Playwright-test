# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: API.spec.js >> POST - REQ
- Location: tests\API.spec.js:18:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 400
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
  18 | test("POST - REQ", async ({}) => {
  19 |     const apiRequestContext = await request.newContext()
  20 | 
  21 |     const response = await apiRequestContext.get(process.env.API_BASE_URL + "/user/login")
  22 | 
  23 |     const body = await response.json()
  24 |     console.log(body)
  25 | 
> 26 |     expect(response.status()).toBe(200)
     |                               ^ Error: expect(received).toBe(expected) // Object.is equality
  27 | 
  28 | 
  29 | })
```
# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: dataDriven.spec.js >> Validating JSON to DataDriven
- Location: tests\dataDriven.spec.js:7:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('[id="login2"]')
    - locator resolved to <a href="#" id="login2" class="nav-link" data-toggle="modal" data-target="#logInModal">Log in</a>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
      - waiting 100ms
    81 × waiting for element to be visible, enabled and stable
       - element is not visible
     - retrying click action
       - waiting 500ms

```

# Test source

```ts
  1  | import { expect } from "@playwright/test";
  2  | 
  3  | export class DataDriven{
  4  | 
  5  |     constructor(page){
  6  |         this.page = page
  7  |         this.loginLinkText = '[id="login2"]'
  8  |         this.username = '[id="loginusername"]'
  9  |         this.password = page.locator('[id="loginpassword"]')
  10 |         this.loginButton = page.locator('//button[text() = "Log in"]')
  11 | 
  12 |         this.logoutLinkText = page.locator('[id="logout2"]')
  13 | 
  14 |     }
  15 | 
  16 |     async navigate(url){
  17 |         await this.page.goto(url)
  18 |     }
  19 | 
  20 |     async loginCredentials(user,pass){
> 21 |         await this.page.locator(this.loginLinkText).click()
     |                                                     ^ Error: locator.click: Target page, context or browser has been closed
  22 |         await this.page.locator(this.username).fill(user) //method 1
  23 |         await this.password.fill(pass) //method 2
  24 |         await this.loginButton.click()
  25 |         
  26 | 
  27 |     }
  28 | 
  29 |     async verifyDashboard(){
  30 |         await expect(this.logoutLinkText).toBeVisible()
  31 |     }
  32 | }
```
# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: dataDriven.spec.js >> Validating JSON to DataDriven Raviteja18
- Location: tests\dataDriven.spec.js:12:9

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator:  locator('[id="logout2"]')
Expected: visible
Received: hidden
Timeout:  8000ms

Call log:
  - Expect "toBeVisible" with timeout 8000ms
  - waiting for locator('[id="logout2"]')
    15 × locator resolved to <a href="#" id="logout2" class="nav-link" onclick="logOut()">Log out</a>
       - unexpected value "hidden"
    - waiting for" https://www.demoblaze.com/" navigation to finish...
    - navigated to "https://www.demoblaze.com/"
    3 × locator resolved to <a href="#" id="logout2" class="nav-link" onclick="logOut()">Log out</a>
      - unexpected value "hidden"

```

```yaml
- navigation:
  - link "PRODUCT STORE":
    - /url: index.html
    - img
    - text: PRODUCT STORE
  - list:
    - listitem:
      - link "Home (current)":
        - /url: index.html
    - listitem:
      - link "Contact":
        - /url: "#"
    - listitem:
      - link "About us":
        - /url: "#"
    - listitem:
      - link "Cart":
        - /url: cart.html
    - listitem:
      - link "Log in":
        - /url: "#"
    - listitem
    - listitem
    - listitem:
      - link "Sign up":
        - /url: "#"
  - list:
    - listitem
    - listitem
    - listitem
  - img "First slide"
  - button "Previous"
  - button "Next"
- link "CATEGORIES":
  - /url: ""
- link "Phones":
  - /url: "#"
- link "Laptops":
  - /url: "#"
- link "Monitors":
  - /url: "#"
- list:
  - listitem:
    - button "Previous"
  - listitem:
    - button "Next"
- heading "About Us" [level=4]
- paragraph: We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality.
- heading "Get in Touch" [level=4]
- paragraph: "Address: 2390 El Camino Real"
- paragraph: "Phone: +440 123456"
- paragraph: "Email: demo@blazemeter.com"
- heading "PRODUCT STORE" [level=4]:
  - img
  - text: PRODUCT STORE
- contentinfo:
  - paragraph: Copyright © Product Store
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
  21 |         await this.page.locator(this.loginLinkText).click()
  22 |         await this.page.locator(this.username).fill(user) //method 1
  23 |         await this.password.fill(pass) //method 2
  24 |         await this.loginButton.click()
  25 |         
  26 | 
  27 |     }
  28 | 
  29 |     async verifyDashboard(){
> 30 |         await expect(this.logoutLinkText).toBeVisible()
     |                                           ^ Error: expect(locator).toBeVisible() failed
  31 |     }
  32 | }
```
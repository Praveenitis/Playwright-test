import { expect } from "@playwright/test";

export class DataDriven{

    constructor(page){
        this.page = page
        this.loginLinkText = '[id="login2"]'
        this.username = '[id="loginusername"]'
        this.password = page.locator('[id="loginpassword"]')
        this.loginButton = page.locator('//button[text() = "Log in"]')

        this.logoutLinkText = page.locator('[id="logout2"]')

    }

    async navigate(url){
        await this.page.goto(url)
    }

    async loginCredentials(user,pass){
        await this.page.locator(this.loginLinkText).click()
        await this.page.locator(this.username).fill(user) //method 1
        await this.password.fill(pass) //method 2
        await this.loginButton.click()
        

    }

    async verifyDashboard(){
        await expect(this.logoutLinkText).toBeVisible()
    }
}
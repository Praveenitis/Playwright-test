import { CommonActions } from "../utils/common";
import {expect} from "@playwright/test"

export class LoginPage extends CommonActions{
    constructor(page){
        super(page)
        this.loginLinkText = '[id="login2"]'
        this.username = '[id="loginusername"]'
        this.password = '[id="loginpassword"]'
        this.loginButton = '//button[text() = "Log in"]'
        this.logoutOption = '[id="logout2"]'
    }

    async navigate(){
        await this.page.goto(process.env.BASE_URL)
    }

    async login(user,pass){
        await this.Click(this.loginLinkText)
        await this.Fillaction(this.username,user)
        await this.Fillaction(this.password, pass)
        await this.Click(this.loginButton)
    }

    async verifyDashboard(){
        await this.isVisible(this.logoutOption)
    }
}


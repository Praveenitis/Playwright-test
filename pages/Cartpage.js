import { CommonActions } from "../utils/common";
import {expect} from "@playwright/test";
import {ProductcartMsg} from "../utils/constants"


export class Cartpage extends CommonActions{
    constructor(page){
        super(page)
        this.cartlink = '[id="cartur"]'
        this.cartpageassert = '//h2[text() = "Products"]'
        this.prodtable = '[id="tbodyid"]'
        this.prodinCart = `//td[text() = "${ProductcartMsg}"]`
        this.placeOrderbtn = '//button[text() = "Place Order"]'
        this.formname = '[id="name"]'
        this.formcountry = '[id="country"]'
        this.formcity = '[id="city"]'
        this.formcc = '[id="card"]'
        this.formmonth = '[id="month"]'
        this.formyear = '[id="year"]'
        this.purchasebtn = '//button[text() = "Purchase"]'
        this.confirmpurchase = '//h2[text() = "Thank you for your purchase!"]'

    }

    async navigate(){
        await this.page.goto(process.env.BASE_URL)
    }

    async cart(){
        await this.Click(this.cartlink)
    }

    async cartPage(){
        await this.isVisible(this.cartpageassert)
        await this.isVisible(this.prodinCart)
    }

    async placeOrder(){
        await this.Click(this.placeOrderbtn)
        await this.Fillaction(this.formname,process.env.FORM_NAME)
        await this.Fillaction(this.formcountry,process.env.FORM_COUNTRY)
        await this.Fillaction(this.formcity,process.env.FORM_CITY)
        await this.Fillaction(this.formcc,process.env.FORM_CC)
        await this.Fillaction(this.formmonth,process.env.FORM_MONTH)
        await this.Fillaction(this.formyear,process.env.FORM_YEAR)
    }
    

    async purchase(){
        await this.Click(this.purchasebtn)
        
    }
    



}



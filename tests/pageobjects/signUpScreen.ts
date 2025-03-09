import {Page} from "../../src/page";
import {get_screen_elements} from "../../src/utils.ts";
import {signUpScreenElements} from "./elements/signUpScreenElements.ts";
import {WdioElementWrapper} from "../../src/wdioWrapper.ts";

import {generateEmail} from "../../src/emailGenerator.ts";


export class SignUpScreen extends Page {

    private elements: any = get_screen_elements(signUpScreenElements, this.env, this.platform);


    private async pageTitle(): Promise<WdioElementWrapper> {
        return this.wdioDriver.findElement(this.elements.pageTitle)
    }
    private async emailInputField(): Promise<WdioElementWrapper> {
        return this.wdioDriver.findElement(this.elements.emailInputField)
    }
    private async firstNameInputField(): Promise<WdioElementWrapper> {
        return this.wdioDriver.findElement(this.elements.firstNameInputField)
    }
    private async passwordInputField(): Promise<WdioElementWrapper> {
        return this.wdioDriver.findElement(this.elements.passwordInputField)
    }
    private async termsAndCondCheckbox(): Promise<WdioElementWrapper> {
        return this.wdioDriver.findElement(this.elements.termsAndCondCheckbox)
    }
    private async signUpButton(): Promise<WdioElementWrapper> {
        return this.wdioDriver.findElement(this.elements.signUpButton)
    }
    private async wrongEmailErrorMessage(): Promise<WdioElementWrapper> {
        return this.wdioDriver.findElement(this.elements.wrongEmailErrorMessage)
    }
    private async wrongPasswordCharactersErrorMessage(): Promise<WdioElementWrapper> {
        return this.wdioDriver.findElement(this.elements.wrongPasswordCharactersErrorMessage)
    }
    private async wrongPasswordUpperLowerErrorMessage(): Promise<WdioElementWrapper> {
        return this.wdioDriver.findElement(this.elements.wrongPasswordUpperLowerErrorMessage)
    }
    private async wrongPasswordNumberErrorMessage(): Promise<WdioElementWrapper> {
        return this.wdioDriver.findElement(this.elements.wrongPasswordNumberErrorMessage)
    }


    public async waitForScreenToLoad() {
        await (await this.pageTitle()).waitForElement();
        console.log("Page Title text = " + (await (await this.pageTitle()).text()));
        expect(await (await this.pageTitle()).text()).toEqual("Create an account");
    }

    public async addEmail(email: string): Promise<any> {
        await (await this.emailInputField()).sendKeys(email);
    }

    public async addValidEmail(): Promise<any> {
        const email = generateEmail();
        console.log("Generated email = " + email);
        await (await this.emailInputField()).sendKeys(email);
    }

    public async addFirstName(name: string): Promise<any> {
        await (await this.firstNameInputField()).sendKeys(name);
    }

    public async addPassword(password: string): Promise<any> {
        await (await this.passwordInputField()).sendKeys(password);
    }

    public async pressTermsAndConditionsCheckbox(): Promise<any> {
        await (await this.termsAndCondCheckbox()).tap();
    }

    public async pressSignUpButton(): Promise<any> {
        await (await this.signUpButton()).tap();
    }

    public async wrongEmailErrorMessageIsDisplayed(): Promise<any> {
        await (await this.wrongEmailErrorMessage()).waitForElement();
        console.log("Wrong Email error = " + (await (await this.wrongEmailErrorMessage()).text()));
        expect(await (await this.wrongEmailErrorMessage()).text()).toEqual("Email is not valid");
    }

    public async wrongPasswordErrorMessageIsDisplayed(): Promise<any> {
        await (await this.wrongPasswordCharactersErrorMessage()).waitForElement();
        console.log("Password length error = " + (await (await this.wrongPasswordCharactersErrorMessage()).text()));
        expect(await (await this.wrongPasswordCharactersErrorMessage()).text()).toEqual("At least 10 characters are required");

        await (await this.wrongPasswordUpperLowerErrorMessage()).waitForElement();
        console.log("Password upper/lower case error = " + (await (await this.wrongPasswordUpperLowerErrorMessage()).text()));
        expect(await (await this.wrongPasswordUpperLowerErrorMessage()).text()).toEqual("At least 1 uppercase and 1 lowercase character is required");

        await (await this.wrongPasswordNumberErrorMessage()).waitForElement();
        console.log("Password number error = " + (await (await this.wrongPasswordNumberErrorMessage()).text()));
        expect(await (await this.wrongPasswordNumberErrorMessage()).text()).toEqual("At least 1 number digit is required");
    }

}
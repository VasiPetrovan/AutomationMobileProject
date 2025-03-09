import {Page} from "../../src/page";
import {WdioDriverWrapper, WdioElementWrapper} from "../../src/wdioWrapper.ts";
import {get_screen_elements} from "../../src/utils.ts";
import {logInScreenElements} from "./elements/logInScreenElements";
export class LogInScreen extends Page {

    constructor(wdioDriver: WdioDriverWrapper, platform: string, env: string) {
        super(wdioDriver, platform, env);
    }

    private elements: any = get_screen_elements(logInScreenElements, this.env, this.platform);


    private async pageTitle(): Promise<WdioElementWrapper> {
        return this.wdioDriver.findElement(this.elements.pageTitle)
    }

    private async emailInputField(): Promise<WdioElementWrapper> {
        return this.wdioDriver.findElement(this.elements.emailInputField)
    }

    private async passwordInputField(): Promise<WdioElementWrapper> {
        return this.wdioDriver.findElement(this.elements.passwordInputField)
    }

    private async logInButton(): Promise<WdioElementWrapper> {
        return this.wdioDriver.findElement(this.elements.logInButton)
    }

    private async logInErrorMessage(): Promise<WdioElementWrapper> {
        return this.wdioDriver.findElement(this.elements.logInErrorMessage)
    }


    public async waitForScreenToLoad() {
        await (await this.pageTitle()).waitForElement();
        await expect(await (await this.pageTitle()).text()).toEqual("Log in to continue")
    }

    async addEmail(email: string): Promise<any> {
        await (await this.emailInputField()).sendKeys(email);
    }

    async addPassword(password: string): Promise<any> {
        await (await this.passwordInputField()).sendKeys(password);
    }

    public async tapLogInButton(): Promise<any> {
        await (await this.logInButton()).tap();
    }

    async logInErrorMessageIsDisplayed(): Promise<any> {
        const logInErrorElement = await this.logInErrorMessage();
        await logInErrorElement.waitForElement();
        const errorMessage = await logInErrorElement.text();
        console.log("Login error message: " + errorMessage);
        await expect(errorMessage).toEqual("Oops! Your email or password is incorrect, please try again.");
    }

}
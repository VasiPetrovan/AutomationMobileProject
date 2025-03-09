import {Page} from "../../src/page";
import {WdioDriverWrapper, WdioElementWrapper} from "../../src/wdioWrapper.ts";
import {get_screen_elements} from "../../src/utils.ts";
import {logInSignUpScreenElements} from "./elements/logInSignUpScreenElements.ts";
export class LogInSignUpScreen extends Page {

    constructor(wdioDriver: WdioDriverWrapper, platform: string, env: string) {
        super(wdioDriver, platform, env);
    }

    private elements: any = get_screen_elements(logInSignUpScreenElements, this.env, this.platform);


    private async pageTitle(): Promise<WdioElementWrapper> {
        return this.wdioDriver.findElement(this.elements.pageTitle)
    }
    private async logInButton(): Promise<WdioElementWrapper> {
        return this.wdioDriver.findElement(this.elements.logInButton)
    }
    private async signUpButton(): Promise<WdioElementWrapper> {
        return this.wdioDriver.findElement(this.elements.signUpButton)
    }


    public async waitForScreenToLoad() {
        const pageTitleElement = await this.pageTitle();
        await pageTitleElement.waitForElement();
        const isDisplayed = await pageTitleElement.getAttribute("displayed");
        console.log("Page Title displayed = " + isDisplayed);
        expect(isDisplayed).toEqual("true");
    }
    public async tapLogInButton(): Promise<any> {
        await (await this.logInButton()).tap();
    }
    public async tapSignUpButton(): Promise<any> {
        await (await this.signUpButton()).tap();
    }

}
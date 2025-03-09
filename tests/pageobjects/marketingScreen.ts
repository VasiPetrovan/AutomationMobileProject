import {Page} from "../../src/page";
import {WdioDriverWrapper, WdioElementWrapper} from "../../src/wdioWrapper.ts";
import {get_screen_elements} from "../../src/utils.ts";
import {marketingScreenElements} from "./elements/marketingScreenElements.ts";

export class MarketingScreen extends Page {

    constructor(wdioDriver: WdioDriverWrapper, platform: string, env: string) {
        super(wdioDriver, platform, env);
    }
    private elements: any = get_screen_elements(marketingScreenElements, this.env, this.platform);

    private async pageTitle(): Promise<WdioElementWrapper> {
        return this.wdioDriver.findElement(this.elements.pageTitle)
    }
    private async signUpOrLogInButton(): Promise<WdioElementWrapper> {
        return this.wdioDriver.findElement(this.elements.signUpOrLogInButton)
    }
    private async closeButton(): Promise<WdioElementWrapper> {
        return this.wdioDriver.findElement(this.elements.closeButton)
    }

    public async waitForScreenToLoad() {
        await (await this.pageTitle()).waitForElement();
        await expect(await (await this.pageTitle()).text()).toEqual("It's Orange Wednesday 🟠")
    }
    public async tapSignUpOrLogInButton(): Promise<any> {
        await (await this.signUpOrLogInButton()).tap();
    }
    public async tapCloseButton(): Promise<any> {
        await (await this.closeButton()).tap();
    }

}
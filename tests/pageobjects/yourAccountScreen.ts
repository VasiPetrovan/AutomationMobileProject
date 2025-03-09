import {Page} from "../../src/page";
import {get_screen_elements} from "../../src/utils";
import {yourAccountScreenElements} from "./elements/yourAccountScreenElements";
import {WdioElementWrapper} from "../../src/wdioWrapper";

export class YourAccountScreen extends Page {

    private elements: any = get_screen_elements(yourAccountScreenElements, this.env, this.platform);


    private async pageTitle(): Promise<WdioElementWrapper> {
        return this.wdioDriver.findElement(this.elements.pageTitle)
    }
    private async profileSettingsButton(): Promise<WdioElementWrapper> {
        return this.wdioDriver.findElement(this.elements.profileSettingsButton)
    }
    private async deleteMyAccountButton(): Promise<WdioElementWrapper> {
        return this.wdioDriver.findElement(this.elements.deleteMyAccountButton)
    }

    private async deleteAccountModalTitle(): Promise<WdioElementWrapper> {
        return this.wdioDriver.findElement(this.elements.deleteAccountModalTitle)
    }


    public async waitForScreenToLoad() {
        await (await this.pageTitle()).waitForElement();
        await expect(await (await this.pageTitle()).text()).toEqual("Your Account")
    }
    public async tapProfileSettingsButton(): Promise<any> {
        await (await this.profileSettingsButton()).tap();
    }
    public async tapDeleteMyAccountButton(): Promise<any> {
        await (await this.deleteMyAccountButton()).tap();
    }

    public async waitForDeleteAccountModalTitleToLoad(): Promise<any> {
        await (await this.deleteAccountModalTitle()).waitForElement();
        await expect(await (await this.deleteAccountModalTitle()).text()).toEqual("Delete Account?")
    }

}
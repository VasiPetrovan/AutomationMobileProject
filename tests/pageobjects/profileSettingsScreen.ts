import {Page} from "../../src/page";
import {get_screen_elements} from "../../src/utils.ts";
import {profileSettingsScreenElements} from "./elements/profileSettingsScreenElements.ts";
import {WdioElementWrapper} from "../../src/wdioWrapper.ts";

export class ProfileSettingsScreen extends Page {

    private elements: any = get_screen_elements(profileSettingsScreenElements, this.env, this.platform);


    private async pageTitle(): Promise<WdioElementWrapper> {
        return this.wdioDriver.findElement(this.elements.pageTitle)
    }


    public async waitForScreenToLoad() {
        await (await this.pageTitle()).waitForElement();
        await expect(await (await this.pageTitle()).text()).toEqual("Log in")
    }

}
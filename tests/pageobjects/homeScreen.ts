import {Page} from "../../src/page";
import {get_screen_elements} from "../../src/utils";
import {homeScreenElements} from "./elements/homeScreenElements";
import {WdioElementWrapper} from "../../src/wdioWrapper.ts";

export class HomeScreen extends Page {

    private elements: any = get_screen_elements(homeScreenElements, this.env, this.platform);

    private async pageTitle(): Promise<WdioElementWrapper> {
        return this.wdioDriver.findElement(this.elements.pageTitle)
    }
    private async whatsCookingElement(): Promise<WdioElementWrapper> {
        return this.wdioDriver.findElement(this.elements.whatsCookingElement)
    }

    public async waitForScreenToLoad() {
        await (await this.whatsCookingElement()).waitForElement();
        await expect(await (await this.whatsCookingElement()).waitForElement()).toBeDisplayed()
    }

}
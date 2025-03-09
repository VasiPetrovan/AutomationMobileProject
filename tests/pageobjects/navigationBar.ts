import {Page} from "../../src/page";
import {get_screen_elements} from "../../src/utils";
import {navigationBarElements} from "./elements/navigationBarElements";
import {WdioElementWrapper} from "../../src/wdioWrapper";

export class NavigationBar extends Page {

    private elements: any = get_screen_elements(navigationBarElements, this.env, this.platform);

    private async homeButton(): Promise<WdioElementWrapper> {
        return this.wdioDriver.findElement(this.elements.homeButton)
    }
    private async orderButton(): Promise<WdioElementWrapper> {
        return this.wdioDriver.findElement(this.elements.orderButton)
    }
    private async offersButton(): Promise<WdioElementWrapper> {
        return this.wdioDriver.findElement(this.elements.offersButton)
    }
    private async moreButton(): Promise<WdioElementWrapper> {
        return this.wdioDriver.findElement(this.elements.moreButton)
    }

    public async tapHomeButton(): Promise<any> {
        await (await this.homeButton()).tap();
    }
    public async tapOrderButton(): Promise<any> {
        await (await this.orderButton()).tap();
    }
    public async tapOffersButton(): Promise<any> {
        await (await this.offersButton()).tap();
    }
    public async tapMoreButton(): Promise<any> {
        await (await this.moreButton()).tap();
    }

}
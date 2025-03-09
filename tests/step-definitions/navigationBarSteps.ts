import {Then} from "@wdio/cucumber-framework";
import {WorldContext} from "../context.ts";

Then("the user presses the navigation bar {string} button", async function (this: WorldContext, button: string) {
    switch (button) {
        case "Home":
            await this.navigationBar.tapHomeButton();
            break;
        case "Order":
            await this.navigationBar.tapOrderButton();
            break;
        case "Offers":
            await this.navigationBar.tapOffersButton();
            break;
        case "More":
            await this.navigationBar.tapMoreButton();
            break;
        default:
            throw new Error(`Invalid button: ${button}`);
    }
});
import {Given, When} from "@wdio/cucumber-framework";
import {WorldContext} from "../context.ts";


Given("the Marketing screen is displayed", async function (this: WorldContext) {
    await this.marketingScreen.waitForScreenToLoad();
});

When('the user presses the SignUpOrLogIn button on Marketing screen', async function (this: WorldContext) {
    await this.marketingScreen.tapSignUpOrLogInButton();
});

When('the user presses the Close button on Marketing screen', async function (this: WorldContext) {
    await this.marketingScreen.tapCloseButton();
});
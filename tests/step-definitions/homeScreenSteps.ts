import {Then} from "@wdio/cucumber-framework";


Then("the Home screen is displayed", async function () {
    await this.homeScreen.waitForScreenToLoad();
});
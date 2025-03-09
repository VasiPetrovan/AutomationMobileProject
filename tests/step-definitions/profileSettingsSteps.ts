import {Then} from "@wdio/cucumber-framework";

Then("the Profile Settings screen is displayed", async function () {
    await this.profileSettingsScreen.waitForScreenToLoad();
});
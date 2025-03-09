import {Then, When} from "@wdio/cucumber-framework";

Then("the Your Account screen is displayed", async function () {
    await this.yourAccountScreen.waitForScreenToLoad();
});
When("the user presses the Profile Settings button", async function () {
    await this.yourAccountScreen.tapProfileSettingsButton();
});
When("the user presses the Delete my account button", async function () {
    await this.yourAccountScreen.tapDeleteMyAccountButton();
});

Then("the Delete account modal is displayed", async function () {
    await this.yourAccountScreen.waitForDeleteAccountModalTitleToLoad();
});
import {Then} from "@wdio/cucumber-framework";
import {WorldContext} from "../context.ts";

Then("the LogIn screen is displayed", async function () {
    await this.logInScreen.waitForScreenToLoad();
});

Then('user user enters the email {string}', async function (this: WorldContext, email: string) {
    await this.logInScreen.addEmail(email);
});

Then('user user enters the password {string}', async function (this: WorldContext, password: string) {
    await this.logInScreen.addPassword(password);
});

Then("the user presses the LogIn button on LogIn screen", async function (this: WorldContext) {
    await this.logInScreen.tapLogInButton();
});

Then("the user LogIn error message is displayed", async function (this: WorldContext) {
    await this.logInScreen.logInErrorMessageIsDisplayed();
});
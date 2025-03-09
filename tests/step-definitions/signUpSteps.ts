import {Then, When} from "@wdio/cucumber-framework";
import {WorldContext} from "../context.ts";


Then("the SignUp screen is displayed", async function (this: WorldContext) {
    await this.signUpScreen.waitForScreenToLoad();
});
When("the user enters the Email: {string}", async function (this: WorldContext, email:string) {
    await this.signUpScreen.addEmail(email);
});
When("the user enters the Password: {string}", async function (this: WorldContext, password:string) {
    await this.signUpScreen.addPassword(password);
});
Then("the wrongEmailErrorMessage is displayed", async function (this: WorldContext) {
    await this.signUpScreen.wrongEmailErrorMessageIsDisplayed();
});
Then("the wrongPasswordErrorMessage is displayed", async function (this: WorldContext) {
    await this.signUpScreen.wrongPasswordErrorMessageIsDisplayed();
});
Then("the user enters a valid email", async function (this: WorldContext) {
    await this.signUpScreen.addValidEmail();
});
Then("the user enters the First Name: {string}", async function (this: WorldContext, name: string) {
    await this.signUpScreen.addFirstName(name);
});
Then('the user presses the TermsAndCondCheckbox', async function (this: WorldContext) {
    await this.signUpScreen.pressTermsAndConditionsCheckbox();
});
Then('the user presses the SignUp button on SignUp screen', async function (this: WorldContext) {
    await this.signUpScreen.pressSignUpButton();
});
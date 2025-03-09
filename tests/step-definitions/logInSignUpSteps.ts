import {Then} from "@wdio/cucumber-framework";
import {WorldContext} from "../context.ts";


Then("the LogInSignUp screen is displayed", async function (this: WorldContext) {
    await this.logInSignUpScreen.waitForScreenToLoad();
});
Then("the user presses the LogIn button", async function () {
    await this.logInSignUpScreen.tapLogInButton();
});
Then("the user presses the SignUp button", async function () {
    await this.logInSignUpScreen.tapSignUpButton();
});
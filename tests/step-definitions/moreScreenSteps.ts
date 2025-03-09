import {Then, When} from "@wdio/cucumber-framework";
import {WorldContext} from "../context.ts";

Then("the More screen is displayed", async function () {
    await this.moreScreen.waitForScreenToLoad();
});

When("the user presses the View Account button", async function (this: WorldContext) {
    await this.moreScreen.tapViewAccountButton();
});

When("the user presses the Log out button", async function (this: WorldContext) {
    await this.moreScreen.tapLogOutButton();
});

Then("the user checks app version", async function (this: WorldContext) {
    await this.moreScreen.checkAppVersion();
});

When ("the user presses the {string} button on More screen", async function (this: WorldContext, button: string) {
    switch (button) {
        case "Allergen Information":
            await this.moreScreen.tapAllergenInformationButton();
            break;
        case "Nutritional Information":
            await this.moreScreen.tapNutritionalInformationButton();
            break;
        case "Terms and Conditions":
            await this.moreScreen.tapTermsAndConditionsButton();
            break;
        case "Privacy Policy":
            await this.moreScreen.tapPrivacyPolicyButton();
            break;
        case "FAQs":
            await this.moreScreen.tapFAQsButton();
            break;
        default:
            throw new Error(`Invalid button: ${button}`);
    }
});

Then ("the {string} screen is displayed", async function (this: WorldContext, screen: string) {
    switch (screen) {
        case "Allergen Information":
            await this.moreScreen.waitForAllergenInformationScreenTitleToLoad();
            break;
        case "Nutritional Information":
            await this.moreScreen.waitForNutritionalInformationScreenTitleToLoad();
            break;
        case "Terms and Conditions":
            await this.moreScreen.waitForTermsAndConditionsScreenTitleToLoad();
            break;
        case "Privacy Policy":
            await this.moreScreen.waitForPrivacyPolicyScreenTitleToLoad();
            break;
        case "FAQs":
            await this.moreScreen.waitForFAQsScreenTitleToLoad();
            break;
        default:
            throw new Error(`Invalid screen: ${screen}`);
    }
});

When("the user presses the More Navigation Screens Back button", async function (this: WorldContext) {
    await this.moreScreen.tapMoreNavScreensBackButton();
});
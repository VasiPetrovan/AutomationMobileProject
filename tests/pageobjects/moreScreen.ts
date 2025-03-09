import {Page} from "../../src/page";
import {get_screen_elements} from "../../src/utils";
import {moreScreenElements} from "./elements/moreScreenElements";
import {WdioElementWrapper} from "../../src/wdioWrapper";
import {moreNavigationScreensElements} from "./elements/moreNavigationScreensElements.ts";

export class MoreScreen extends Page {

    private elements: any = get_screen_elements(moreScreenElements, this.env, this.platform);
    private moreNavElements: any = get_screen_elements(moreNavigationScreensElements, this.env, this.platform);

    private async pageTitle(): Promise<WdioElementWrapper> {
        return this.wdioDriver.findElement(this.elements.pageTitle)
    }
    private async viewAccountButton(): Promise<WdioElementWrapper> {
        return this.wdioDriver.findElement(this.elements.viewAccountButton)
    }
    private async allergenInformationButton(): Promise<WdioElementWrapper> {
        return this.wdioDriver.findElement(this.elements.allergenInformationButton)
    }
    private async nutritionalInformationButton(): Promise<WdioElementWrapper> {
        return this.wdioDriver.findElement(this.elements.nutritionalInformationButton)
    }
    private async termsAndConditionsButton(): Promise<WdioElementWrapper> {
        return this.wdioDriver.findElement(this.elements.termsAndConditionsButton)
    }
    private async privacyPolicyButton(): Promise<WdioElementWrapper> {
        return this.wdioDriver.findElement(this.elements.privacyPolicyButton)
    }
    private async faqsButton(): Promise<WdioElementWrapper> {
        return this.wdioDriver.findElement(this.elements.faqsButton)
    }
    private async versionLabel(): Promise<WdioElementWrapper> {
        return this.wdioDriver.findElement(this.elements.versionField)
    }
    private async logOutButton(): Promise<WdioElementWrapper> {
        return this.wdioDriver.findElement(this.elements.logOutButton)
    }

    private async allergenInformationScreenTitle(): Promise<WdioElementWrapper> {
        return this.wdioDriver.findElement(this.moreNavElements.allergenInformationScreenTitle)
    }
    private async nutritionalInformationScreenTitle(): Promise<WdioElementWrapper> {
        return this.wdioDriver.findElement(this.moreNavElements.nutritionalInformationScreenTitle)
    }
    private async termsAndConditionsScreenTitle(): Promise<WdioElementWrapper> {
        return this.wdioDriver.findElement(this.moreNavElements.termsAndConditionsScreenTitle)
    }
    private async privacyPolicyScreenTitle(): Promise<WdioElementWrapper> {
        return this.wdioDriver.findElement(this.moreNavElements.privacyPolicyScreenTitle)
    }
    private async faqsScreenTitle(): Promise<WdioElementWrapper> {
        return this.wdioDriver.findElement(this.moreNavElements.faqsScreenTitle)
    }
    private async moreNavScreensBackButton(): Promise<WdioElementWrapper> {
        return this.wdioDriver.findElement(this.moreNavElements.moreNavScreensBackButton)
    }


    public async waitForScreenToLoad() {
        await (await this.pageTitle()).waitForElement();
        await expect(await (await this.pageTitle()).text()).toEqual("More")
    }
    public async tapViewAccountButton(): Promise<any> {
        await (await this.viewAccountButton()).tap();
    }
    public async tapAllergenInformationButton(): Promise<any> {
        await (await this.allergenInformationButton()).tap();
    }
    public async tapNutritionalInformationButton(): Promise<any> {
        await (await this.nutritionalInformationButton()).tap();
    }
    public async tapTermsAndConditionsButton(): Promise<any> {
        await (await this.termsAndConditionsButton()).tap();
    }
    public async tapPrivacyPolicyButton(): Promise<any> {
        await (await this.privacyPolicyButton()).tap();
    }
    public async tapFAQsButton(): Promise<any> {
        await (await this.faqsButton()).tap();
    }
    public async checkAppVersion() {
        await (await this.versionLabel()).waitForElement();
        await expect(await (await this.versionLabel()).text()).toEqual("Version: 1.2.1")
    }
    public async tapLogOutButton(): Promise<any> {
        await (await this.logOutButton()).tap();
    }

    public async waitForAllergenInformationScreenTitleToLoad() {
        await (await this.allergenInformationScreenTitle()).waitForElement();
        await expect(await (await this.allergenInformationScreenTitle()).text()).toEqual("Allergens")
    }
    public async waitForNutritionalInformationScreenTitleToLoad() {
        await (await this.nutritionalInformationScreenTitle()).waitForElement();
        await expect(await (await this.nutritionalInformationScreenTitle()).text()).toEqual("Nutritional information")
    }
    public async waitForTermsAndConditionsScreenTitleToLoad() {
        await (await this.termsAndConditionsScreenTitle()).waitForElement();
        await expect(await (await this.termsAndConditionsScreenTitle()).text()).toEqual("Terms & Conditions - Popeyes")
    }
    public async waitForPrivacyPolicyScreenTitleToLoad() {
        await (await this.privacyPolicyScreenTitle()).waitForElement();
        await expect(await (await this.privacyPolicyScreenTitle()).text()).toEqual("Privacy Policy")
    }
    public async waitForFAQsScreenTitleToLoad() {
        await (await this.faqsScreenTitle()).waitForElement();
        await expect(await (await this.faqsScreenTitle()).text()).toEqual("FAQs")
    }
    public async tapMoreNavScreensBackButton(): Promise<any> {
        await (await this.moreNavScreensBackButton()).tap();
    }

}
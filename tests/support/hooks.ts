import {After, Before, setDefaultTimeout} from '@cucumber/cucumber';
import {WorldContext} from "../context";
import {WdioDriverWrapper} from "../../src/wdioWrapper";
import {MarketingScreen} from "../pageobjects/marketingScreen.ts";
import {LogInSignUpScreen} from "../pageobjects/logInSignUpScreen.ts";
import {LogInScreen} from "../pageobjects/logInScreen.ts";
import {HomeScreen} from "../pageobjects/homeScreen.ts";
import {SignUpScreen} from "../pageobjects/signUpScreen.ts";
import {NavigationBar} from "../pageobjects/navigationBar.ts";
import {MoreScreen} from "../pageobjects/moreScreen.ts";
import {YourAccountScreen} from "../pageobjects/yourAccountScreen.ts";
import {ProfileSettingsScreen} from "../pageobjects/profileSettingsScreen.ts";


setDefaultTimeout(180000);
Before(async function (this: WorldContext, scenario) {

    this.driver = new WdioDriverWrapper()

    await this.driver.reloadSession();

    this.platform = process.env.PLATFORM || '';
    this.env = process.env.ENV || '';

    this.marketingScreen = new MarketingScreen(this.driver, this.platform, this.env);
    this.logInSignUpScreen = new LogInSignUpScreen(this.driver, this.platform, this.env);
    this.logInScreen = new LogInScreen(this.driver, this.platform, this.env);
    this.homeScreen = new HomeScreen(this.driver, this.platform, this.env);
    this.signUpScreen = new SignUpScreen(this.driver, this.platform, this.env);
    this.navigationBar = new NavigationBar(this.driver, this.platform, this.env);
    this.moreScreen = new MoreScreen(this.driver, this.platform, this.env);
    this.yourAccountScreen = new YourAccountScreen(this.driver, this.platform, this.env);
    this.profileSettingsScreen = new ProfileSettingsScreen(this.driver, this.platform, this.env);

});

After(async function (this: WorldContext, scenario) {
});
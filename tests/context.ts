import {IWorld, setWorldConstructor, World} from '@cucumber/cucumber';
import {MarketingScreen} from "./pageobjects/marketingScreen.ts";
import {LogInSignUpScreen} from "./pageobjects/logInSignUpScreen.ts";
import {LogInScreen} from "./pageobjects/logInScreen.ts";
import {HomeScreen} from "./pageobjects/homeScreen.ts";
import {SignUpScreen} from "./pageobjects/signUpScreen.ts";
import {NavigationBar} from "./pageobjects/navigationBar.ts";
import {MoreScreen} from "./pageobjects/moreScreen.ts";
import {YourAccountScreen} from "./pageobjects/yourAccountScreen.ts";
import {ProfileSettingsScreen} from "./pageobjects/profileSettingsScreen.ts";

export class WorldContext extends World {

    platform: string;
    env: string;
    driver: any;

    marketingScreen!: MarketingScreen;
    logInSignUpScreen!: LogInSignUpScreen;
    logInScreen!: LogInScreen;
    homeScreen!: HomeScreen;
    signUpScreen!: SignUpScreen;
    navigationBar!: NavigationBar;
    moreScreen!: MoreScreen;
    yourAccountScreen!: YourAccountScreen;
    profileSettingsScreen!: ProfileSettingsScreen;

    constructor(options: IWorld) {
        super(options);
        this.platform = process.platform || "android"; // Set a default value or retrieve it from options
        this.env = process.env.ENV || "staging"; // Example of fetching from env variables
    }

    [key: string]: any;
}

setWorldConstructor(WorldContext);





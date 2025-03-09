const APP = process.env.APP
const PLATFORM = process.env.PLATFORM
const ENV = process.env.ENV
const DECIVE = process.env.DEVICE
let fileExtension;
if (PLATFORM === 'ios') {
    fileExtension = '.ipa'
} else {
    fileExtension = '.apk'
}
const appPath = 'builds/' + APP + '/' + PLATFORM + '/' + ENV + '/' + APP + fileExtension

export const capabilities = {

    iPhone12: {
        service: ['appium'],
        platform: 'ios',
        desiredCapabilities: {
            platformName: 'iOS',
            'appium:deviceName': 'iPhone 12',
            'appium:platformVersion': '16.4',
            'appium:automationName': 'XCUITest',
            'appium:app': appPath,
            'appium:udid': '00008101-000145341E46001E'
        },
        hostname: 'localhost',
        port: 4723,
        user: "",
        key: "",
    },

    s23: {
        service: ["appium"],
        platform: 'android',
        desiredCapabilities: {
            "platformName": "Android",
            "appium:platformVersion": "14",
            "appium:deviceName": "emulator-5554",
            "appium:automationName": "UiAutomator2",
            "appium:udid": "emulator-5554",
            "appium:app": appPath,
            "appium:autoGrantPermissions": true
        },
        hostname: 'localhost',
        port: 4723,
    },

    androidEmulator: {
        service: [],
        platform: 'android',
        desiredCapabilities: {
            platformName: 'Android',
            'appium:deviceName': 'Android GoogleAPI Emulator',
            'appium:platformVersion': '13.0',
            'appium:automationName': 'UiAutomator2',
            'appium:app': appPath,
            'appium:udid': 'emulator-5554'
        },
        hostname: 'localhost',
        port: 4723,
    }
}
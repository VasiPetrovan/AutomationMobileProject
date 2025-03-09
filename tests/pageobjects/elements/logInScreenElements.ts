export const logInScreenElements = {
    pageTitle: {
        prod: {
            ios: "",
            android: "//android.widget.TextView[@text=\"Log in to continue\"]"
        }, staging: {
            ios: "",
            android: "//android.widget.TextView[@text=\"Log in to continue\"]"
        }
    },
    emailInputField: {
        prod: {
            ios: "",
            android: "//android.widget.ScrollView/android.view.View[1]/android.widget.EditText"
        }, staging: {
            ios: "",
            android: "//android.widget.ScrollView/android.view.View[1]/android.widget.EditText"
        }
    },
    passwordInputField: {
        prod: {
            ios: "",
            android: "//android.widget.ScrollView/android.view.View[2]/android.widget.EditText"
        }, staging: {
            ios: "",
            android: "//android.widget.ScrollView/android.view.View[2]/android.widget.EditText"
        }
    },
    logInButton: {
        prod: {
            ios: "",
            android: "//android.widget.ScrollView/android.view.View[3]/android.widget.Button"
        }, staging: {
            ios: "",
            android: "//android.widget.ScrollView/android.view.View[3]/android.widget.Button"
        }
    },
    logInErrorMessage: {
        prod: {
            ios: "",
            android: "//android.widget.TextView[@text=\"Oops! Your email or password is incorrect, please try again.\"]"
        }, staging: {
            ios: "",
            android: "//android.widget.TextView[@text=\"Oops! Your email or password is incorrect, please try again.\"]"
        }
    },

}
export const signUpScreenElements = {
    pageTitle: {
        prod: {
            ios: "",
            android: "//android.widget.TextView[@text=\"Create an account\"]"
        }, staging: {
            ios: "",
            android: "//android.widget.TextView[@text=\"Create an account\"]"
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
    firstNameInputField: {
        prod: {
            ios: "",
            android: "//android.widget.ScrollView/android.view.View[2]/android.widget.EditText"
        }, staging: {
            ios: "",
            android: "//android.widget.ScrollView/android.view.View[2]/android.widget.EditText"
        }
    },
    passwordInputField: {
        prod: {
            ios: "",
            android: "//android.widget.ScrollView/android.view.View[5]/android.widget.EditText"
        }, staging: {
            ios: "",
            android: "//android.widget.ScrollView/android.view.View[5]/android.widget.EditText"
        }
    },
    termsAndCondCheckbox: {
        prod: {
            ios: "",
            android: "//android.widget.ScrollView/android.widget.CheckBox[2]"
        }, staging: {
            ios: "",
            android: "//android.widget.ScrollView/android.widget.CheckBox[2]"
        }
    },
    signUpButton: {
        prod: {
            ios: "",
            android: "//android.widget.TextView[@text=\"Sign Up\"]"
        }, staging: {
            ios: "",
            android: "//android.widget.TextView[@text=\"Sign Up\"]"
        }
    },
    wrongEmailErrorMessage: {
        prod: {
            ios: "",
            android: "//android.widget.TextView[@text=\"Email is not valid\"]"
        }, staging: {
            ios: "",
            android: "//android.widget.TextView[@text=\"Email is not valid\"]"
        }
    },
    wrongPasswordCharactersErrorMessage: {
        prod: {
            ios: "",
            android: "//android.widget.TextView[@text=\"At least 10 characters are required\"]"
        }, staging: {
            ios: "",
            android: "//android.widget.TextView[@text=\"At least 10 characters are required\"]"
        }
    },
    wrongPasswordUpperLowerErrorMessage: {
        prod: {
            ios: "",
            android: "//android.widget.TextView[@text=\"At least 1 uppercase and 1 lowercase character is required\"]"
        }, staging: {
            ios: "",
            android: "//android.widget.TextView[@text=\"At least 1 uppercase and 1 lowercase character is required\"]"
        }
    },
    wrongPasswordNumberErrorMessage: {
        prod: {
            ios: "",
            android: "//android.widget.TextView[@text=\"At least 1 number digit is required\"]"
        }, staging: {
            ios: "",
            android: "//android.widget.TextView[@text=\"At least 1 number digit is required\"]"
        }
    },
}
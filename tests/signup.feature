Feature: Popeyes signup feature

  Scenario: Popeyes signup happy path
    Given the Marketing screen is displayed
    When the user presses the Close button on Marketing screen
    Then the LogInSignUp screen is displayed
    When the user presses the SignUp button
    Then the SignUp screen is displayed
    Then the user enters a valid email
    Then the user enters the First Name: "TestUser"
    When the user enters the Password: "Password123"
    Then the user presses the TermsAndCondCheckbox
    Then the user presses the SignUp button on SignUp screen
    Then the Home screen is displayed



  Scenario: Popeyes signup with wrong email and password
    Given the Marketing screen is displayed
    When the user presses the Close button on Marketing screen
    Then the LogInSignUp screen is displayed
    When the user presses the SignUp button
    Then the SignUp screen is displayed
    When the user enters the Email: "a"
    Then the wrongEmailErrorMessage is displayed
    When the user enters the Password: "a"
    Then the wrongPasswordErrorMessage is displayed
Feature: Popeyes login feature

  Scenario: Popeyes login happy path
    Given the Marketing screen is displayed
    When the user presses the SignUpOrLogIn button on Marketing screen
    Then the LogInSignUp screen is displayed
    When the user presses the LogIn button
    Then the LogIn screen is displayed
    Then user user enters the email "Anton.algeorge+test7@tickbird.com"
    Then user user enters the password "Password123"
    Then the user presses the LogIn button on LogIn screen
    Then the Home screen is displayed



  Scenario: Popeyes login with wrong password
    Given the Marketing screen is displayed
    When the user presses the SignUpOrLogIn button on Marketing screen
    Then the LogInSignUp screen is displayed
    When the user presses the LogIn button
    Then the LogIn screen is displayed
    Then user user enters the email "Anton.algeorge+test7@tickbird.com"
    Then user user enters the password "Password12345"
    Then the user presses the LogIn button on LogIn screen
    Then the user LogIn error message is displayed
    Then user user enters the email "Anton.algeorge+test7@tickbird.com"
    Then user user enters the password "Password123"
    Then the user presses the LogIn button on LogIn screen
    Then the Home screen is displayed
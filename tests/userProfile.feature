Feature: Popeyes user profile feature

  Scenario: Popeyes logout feature
    Given the Marketing screen is displayed
    When the user presses the SignUpOrLogIn button on Marketing screen
    Then the LogInSignUp screen is displayed
    When the user presses the LogIn button
    Then the LogIn screen is displayed
    Then user user enters the email "Anton.algeorge+test7@tickbird.com"
    Then user user enters the password "Password123"
    Then the user presses the LogIn button on LogIn screen
    Then the Home screen is displayed
    When the user presses the navigation bar "More" button
    Then the More screen is displayed
    When the user presses the Log out button
    Then the LogIn screen is displayed


  Scenario: Popeyes go to Profile Settings screen feature
    Given the Marketing screen is displayed
    When the user presses the SignUpOrLogIn button on Marketing screen
    Then the LogInSignUp screen is displayed
    When the user presses the LogIn button
    Then the LogIn screen is displayed
    Then user user enters the email "Anton.algeorge+test7@tickbird.com"
    Then user user enters the password "Password123"
    Then the user presses the LogIn button on LogIn screen
    Then the Home screen is displayed
    When the user presses the navigation bar "More" button
    Then the More screen is displayed
    Then the user checks app version
    When the user presses the View Account button
    Then the Your Account screen is displayed
    When the user presses the Profile Settings button
    Then the Profile Settings screen is displayed


  Scenario: Popeyes More Navigation screens feature
    Given the Marketing screen is displayed
    When the user presses the SignUpOrLogIn button on Marketing screen
    Then the LogInSignUp screen is displayed
    When the user presses the LogIn button
    Then the LogIn screen is displayed
    Then user user enters the email "Anton.algeorge+test7@tickbird.com"
    Then user user enters the password "Password123"
    Then the user presses the LogIn button on LogIn screen
    Then the Home screen is displayed
    When the user presses the navigation bar "More" button
    Then the More screen is displayed
    When the user presses the "Allergen Information" button on More screen
    Then the "Allergen Information" screen is displayed
    When the user presses the More Navigation Screens Back button
    When the user presses the "Nutritional Information" button on More screen
    Then the "Nutritional Information" screen is displayed
    When the user presses the More Navigation Screens Back button
    When the user presses the "Terms and Conditions" button on More screen
    Then the "Terms and Conditions" screen is displayed
    When the user presses the More Navigation Screens Back button
    When the user presses the "Privacy Policy" button on More screen
    Then the "Privacy Policy" screen is displayed
    When the user presses the More Navigation Screens Back button
    When the user presses the "FAQs" button on More screen
    Then the "FAQs" screen is displayed


  Scenario: Popeyes Delete account feature
    Given the Marketing screen is displayed
    When the user presses the SignUpOrLogIn button on Marketing screen
    Then the LogInSignUp screen is displayed
    When the user presses the LogIn button
    Then the LogIn screen is displayed
    Then user user enters the email "test.delete@email.com"
    Then user user enters the password "Password123"
    Then the user presses the LogIn button on LogIn screen
    Then the Home screen is displayed
    When the user presses the navigation bar "More" button
    Then the More screen is displayed
    When the user presses the View Account button
    Then the Your Account screen is displayed
    When the user presses the Delete my account button
    Then the Delete account modal is displayed
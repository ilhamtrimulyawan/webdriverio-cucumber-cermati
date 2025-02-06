@cermati
Feature: User Registration

  @register
  Scenario: Successfully register a new user
    Given I am on the register cermati page
    When I fill in the registration form with valid data
      | phone       | email          | firstName | lastName |
      | 08988203405 | ilham@test.com | Ilham      | Tri Mulyawan      |
    And I click Daftar button
    Then I should be on the OTP verification page

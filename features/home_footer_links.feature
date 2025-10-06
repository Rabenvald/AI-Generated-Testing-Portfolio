Feature: Home page footer links

  Background:
    Given I am on the Home page

  Scenario: Verify GitHub link exists in footer
    Then I should see a footer link "GitHub"

  Scenario: Verify YouTube link exists in footer
    Then I should see a footer link "YouTube"

  Scenario: Verify Blog link exists in footer
    Then I should see a footer link "Blog"

  Scenario: Verify Stack Overflow link exists in footer
    Then I should see a footer link "Stack Overflow"

  Scenario: Verify LinkedIn link exists in footer
    Then I should see a footer link "LinkedIn"

Feature: Home page footer links

  Scenario: GitHub link exists
    Given I am on the home page
    Then the "GitHub" link should be visible in the footer

  Scenario: YouTube link exists
    Then the "YouTube" link should be visible in the footer

  Scenario: Blog link exists
    Then the "Blog" link should be visible in the footer

  Scenario: Stack Overflow link exists
    Then the "Stack Overflow" link should be visible in the footer

  Scenario: LinkedIn link exists
    Then the "LinkedIn" link should be visible in the footer

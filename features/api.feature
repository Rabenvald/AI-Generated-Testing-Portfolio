Feature: API page interactions

  Scenario: Nav bar exists
    Given I am on the API page
    Then the nav bar should be visible

  Scenario: Chromium hash link is not visible
    Then the chromium hash link should not be visible

  Scenario: Chromium hash link becomes visible on hover
    When I hover over the chromium header
    Then the chromium hash link should be visible

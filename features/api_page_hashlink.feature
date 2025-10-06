Feature: API page hash link visibility

  Background:
    Given I navigate to the API page

  Scenario: Nav bar should exist
    Then I should see the nav bar

  Scenario: Hash link next to chromium header should initially be invisible
    Then the hash link next to chromium header under Properties should not be visible

  Scenario: Hash link next to chromium header should appear on hover
    When I hover over the chromium header under Properties
    Then the hash link next to chromium header under Properties should be visible

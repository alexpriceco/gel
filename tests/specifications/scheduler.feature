Feature: Scheduling a session for a single day
  In order to maximize charger utilization
  As an admin
  I want to schedule a user at the next most optimal time

  Background:
    Given that we have a company
    And the company has work hours 9 to 5
    And a charger group that has 2 chargers

  Scenario: No sessions
     When a timeslot is requested
     Then the timeslot should start at 9 am
     And the timeslot should end at 10 am

  Scenario: No sessions, custom length session request
     When a timeslot of 120 minutes is requested
     Then the timeslot should start at 9 am
     And the timeslot should end at 11 am

  Scenario: Existing session on single charger
    Given a session exists at 9 am for charger A1 for 1 hour
    When a timeslot is requested
    Then the timeslot should start at 9 am
    And the session should be on charger A2

  Scenario: Full timeslot
    Given the timeslot 9 am is full
    When a timeslot is requested
    Then the timeslot should start at 10 am

  Scenario: All timeslots full
    Given that there are no free timeslots
    When a timeslot is requested
    Then there will be no session scheduled

  Scenario: User has events in calendar that overlap (1)
    Given the user is busy from 9 am to 11 am
    When a timeslot is requested
    Then the timeslot should start at 12 pm

  Scenario: User has events in calendar that overlap (2)
    Given the user is busy from 9:00 am to 10:30 am
    When a timeslot is requested
    Then the timeslot should start at 11 am

  Scenario: User has events in calendar that are possible within the charging session
    Given the user is busy from 9:15 am to 9:45 am
    When a timeslot is requested
    Then the timeslot should start at 9 am

  Scenario: User has events in calendar that are possible within the charging session (2)
    Given the user is busy from 9 am to 10 am
    When a timeslot is requested
    Then the timeslot should start at 9 am

  Scenario: User has events in calendar that do not overlap (1)
    Given the user is busy from 10 am to 11 am
    When a timeslot is requested
    Then the timeslot should start at 10 am

  Scenario: User has events in calendar that do not overlap (2)
    Given the user is busy from 11 am to 12 pm
    When a timeslot is requested
    Then the timeslot should start at 9 am

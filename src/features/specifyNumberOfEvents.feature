Feature: Specify Number of Events
    Scenario: When user has NOT specified a number, 32 events are shown by default.
        Given user does NOT specify a number of events in a city
        When searching for events in that city
        Then the user will recieve a list of 32 events in that city by default

    Scenario: User can change the number of events displayed.
        Given user specifies how many events to view
        When searching for events in a city
        Then the specified amount of events will be displayed
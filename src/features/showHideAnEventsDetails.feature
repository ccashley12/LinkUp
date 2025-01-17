Feature: Show/Hide Event Details
    Scenario: An event element is collapsed by default.
        Given the user has not yet tapped on Show Details
        When the user is viewing the list of events
        Then the app should hide the event details by default

    Scenario:  User can expand an event to see details.
        Given the user is viewing the list of events
        When the user taps on a specific event
        Then the app should display the details of that event
        
    Scenario: User can collapse an event to hide details.
        Given the user is viewing the details of an event
        When the user taps on the Hide Details option
        Then the app should hide the event details and return to the event list
## Meet up App
### App Key Features
Feature 1 - Filter Events by City
USER STORY:
- AS a user,
- I should be able to filter events by a city
- SO that I can see a list of events in that specified city

> Scenario 1 
When a user has not searched for a city, show upcoming events from all cities.
- GIVEN user has not searched for a city
- WHEN the user upens the app
- THEN the user should see a list of upcoming events in all cities

> Scenario 2
User should see a list of suggestions when they search for a city.
- GIVEN the main page is open
- WHEN the user starts to type in the city textbox
- THEN the user will recieve a list of cities (suggestions) below matching what they type

> Scenario 3
User can select a city from the suggested list.
- GIVEN user was typing "Atlanta" in the textbox AND the list of suggested cities is showing
- WHEN the user selects a city (e.g. "Atlanta, Georgia") from the list
- THEN user's city will be changed to that city AND the user will recieved a list of upcoming events in that city

Feature 2 - Show/Hide Event Details
USER STORY:
- AS a user
- I should be able to view or hide event details
- SO they will not always be displayed or hidden

> Scenario 1
An event element is collapsed by default.
- GIVEN user is on local events
- WHEN user views list
- THEN ALL events listed are displayed in a collapsed state  by default

> Secenario 2
User can expand an event to see details.
- GIVEN user wants to view event details
- WHEN they click "Show details" button
- THEN event details will be displayed 

> Scenario 3
User can collapse an event to hide details.
- GIVEN user wants to hide event details
- WHEN they click "Hide details" button
- THEN event details will be hidden

Feature 3 - Specify Number of Events
USER STORY:
- AS a user
- I should be able to specify number of events
- SO that the desired amount of events will be displayed

> Scenario 1
When user has NOT specified a number, 32 events are shown by default
- GIVEN user does NOT specify a number of events in a city
- WHEN searching for events in that city
- THEN the user will recieve a list of 32 events in that city by default

> Scenario 2
User can change the number of events displayed.
- GIVEN user specifies how many events to view
- WHEN searching for events in a city
- THEN the specified amount of events will be displayed

Feature 4 - Use the App When Offline
USER STORY:
- AS a user
- I want to use the app when offline
- SO the app is available without internet connection

> Scenario 1
Show cached data when there's no internet connection.
- GIVEN User could store current state of app on device
- WHEN they have access to the internet
- THEN user will be able to use stored state of app

> Scenario 2
Show error when user changes search settings (city, number of events).
- GIVEN user is on the main search page
- WHEN the user selects a city different from dropdown and/or changes the number of events to display
- THEN an error message will be displayed saying "No events found. Please try again."

Feature 5 - Add an App Shortcut to the Home Screen
USER STORY:
- AS a user
- I want to add a shortcut for the app on my home screen
- SO I can access the app more efficiently 

> Scenario 1
User can install the meet app as a shortcut on their device home screen.
- GIVEN user adds shortcut for app
- WHEN using their device OS 
- THEN the shortcut will be added on their device 

**There is nothing a programmer can do in this case, it cannot be tested.**

Feature 6 - Display Charts Visualizing Event Details
USER STORY:
- AS a user
- I can view event details in a chart
- SO I can easily understand the event data

> Scenario 1
Show a chart with the number of upcoming events in each city.
- GIVEN a user is on the main page 
- WHEN they click to view chart displaying events
- THEN I should see a chart for each city with correlating events and the cities with no events will not be listed


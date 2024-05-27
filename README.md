# Project description

To build a serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events.

# User Stories

### Feature 1: Filter Events By City
As a user,
I should be able to filter events by city
So that I can see a list of events taking place in that city.

**Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities.**
• Given user hasn’t searched for any city;
• When the user opens the app;
• Then the user should see a list of upcoming events.

**Scenario 2: User should see a list of suggestions when they search for a city.**
• Given the main page is open;
• When user starts typing in the city textbox;
• Then the user should receive a list of cities (suggestions) that match what they’ve typed.

**Scenario 3: User can select a city from the suggested list.**
• Given user was typing “Berlin” in the city textbox AND the list of suggested cities is showing;
• When the user selects a city (e.g., “Berlin, Germany”) from the list;
• Then their city should be changed to that city (i.e., “Berlin, Germany”) AND the user should receive a list of upcoming events in that city.


### Feature 2: Show/Hide Event Details
As a user,
I should be able to show/hide the visibility of event details,
So that I can customize my view based on the level of information I need.

**Scenario 1: An event element is collapsed by default.**
• Given the user is on the events page
• When they view the details of an event
• Then the event details should be collapsed AND the user should have the option to expand the details

**Scenario 2: User can expand an event to see details.**
• Given the user is on the events page
• When they choose to view the details of an event
• Then the event details should be expanded AND the user should be able to see all relevant details of the event

**Scenario 3: User can collapse an event to hide details.**
• Given the user is viewing the details of an expanded event
• When they choose to hide the details of the event
• Then the event details should be collapsed AND the user should no longer see the detailed information of the event


### Feature 3: Specify Number of Events
As a user,
I should be able to specify the number of events to be displayed,
So that I can control the amount of information visible at a given time, ensuring a more focused and manageable view.

**Scenario 1: When user hasn’t specified a number, 32 events are shown by default.**
• Given the user is on the events page
• When they view the list of events without specifying a number
• Then 32 events should be shown by default AND the user can choose to customize the number of events displayed

**Scenario 2: User can change the number of events displayed.**
• Given the user is on the events page
• When they choose to customize the number of events to be displayed
• Then the user should see the updated list with the specified number of events AND the displayed events should match the user's specified number


### Feature 4: Use the App When Offline
As a user,
I should be able to access the app and its core features even when offline,
So that I can continue to view and interact with event information without being dependent on an internet connection.

**Scenario 1: Show cached data when there’s no internet connection.**
• Given the user has previously accessed the app and cached data is available
• When the user tries to use the app without an internet connection
• Then the app should display the cached data AND the user should be able to interact with the cached data

**Scenario 2: Show error when user changes search settings (city, number of events).**
• Given the user has previously accessed the app and cached data is available AND the user is currently offline
• When the user attempts to change search settings (city, number of events)
• Then the app should display an error message indicating the user is offline AND the user should not be able to modify the search settings


### Feature 5: Add an App Shortcut to the Home Screen
As a mobile user,
I should be able to add a shortcut to the app on my device's home screen,
So that I can easily access the app with a single tap, improving user convenience and quick access.

**Scenario 1: User can install the meet app as a shortcut on their device home screen.**
• Given the user has the meet app installed on their device
• When the user accesses the app and chooses to add a shortcut to the home screen
• Then the app should prompt the user with the option to add a shortcut AND the user should be able to see the meet app shortcut on their device home screen


### Feature 6: Display Charts Visualizing Event Details
As a user,
I should be able to view charts that visualize event details,
So that I can gain insights and understand patterns in a more visually appealing and comprehensible manner.

**Scenario 1: Show a chart with the number of upcoming events in each city.**
• Given the user is viewing the details of an event
• When the user selects the "Charts" option
• Then the chart should be displayed with accurate data

# Serverless Functions

This app will use serverless functions for secure user access, OAuth2 token management, and interactions with the Google Calendar API. This approach ensures scalability, efficient resource use, and cost-effectiveness by only paying for executed functions, eliminating the need for dedicated servers.

# Project dependencies

• React 

• Google Calendar API

• AWS Lambda

• Jest (Unit and Integration Testing)

• Jest Cucumber (User Acceptance Testing) 

• Puppeteer (End-to-End Testing)

• Atatus (Performance Monitoring) 

# Result

https://loonxdesign.github.io/meet/

Note: If you need access to the site, please send me an e-mail with your g-mail address. 

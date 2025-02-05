import React from "react";
import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, within, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import NumberOfEvents from '../components/NumberOfEvents';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
    test('When user has NOT specified a number, 32 events are shown by default.', ({ given, when, then }) => {
        let AppComponent;

        given('user does NOT specify a number of events in a city', () => {});

        when('searching for events in that city', () => {
			AppComponent = render(<App />);
        });

        then('the user will recieve a list of 32 events in that city by default', async () => {
            const AppDOM = AppComponent.container.firstChild;
			const EventListDOM = AppDOM.querySelector('#event-list');

			await waitFor(() => {
				const EventListItems = within(EventListDOM).queryAllByRole('listitem');
				expect(EventListItems).toHaveLength(32);
			});
        });
    });

    test('User can change the number of events displayed.', ({ given, when, then }) => {
        let AppComponent;
		let AppDOM;
		let EventListDOM;
		let numberOfEventsComponent;

        given('user specifies how many events to view', async () => {
            AppComponent = render(<App />);
			AppDOM = AppComponent.container.firstChild;
			EventListDOM = AppDOM.querySelector('#event-list');

			await waitFor(() => {
				const EventListItems = within(EventListDOM).queryAllByRole('listitem');
				expect(EventListItems).toHaveLength(32);
			});
        });

        when('searching for events in a city', async () => {
            const user = userEvent.setup();

			numberOfEventsComponent = render(
				<NumberOfEvents
					setCurrentNOE={() => {}}
					currentEventCount={32}
					setErrorAlert={() => {}}
				/>
			);
			const inputElement = numberOfEventsComponent.container.querySelector('#numberOfEvents');
			const submitButton = numberOfEventsComponent.container.querySelector('button');

			await user.clear(inputElement);
			await user.type(inputElement, '5');
			await user.click(submitButton)
        });

        then('the specified amount of events will be displayed', async () => {
            const inputElement = numberOfEventsComponent.container.querySelector('#numberOfEvents');

			expect(inputElement.value).toBe('5');
        });
    });
});
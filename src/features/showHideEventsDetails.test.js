import React from "react";
import { loadFeature, defineFeature } from 'jest-cucumber';
import { render,screen, within, waitFor } from '@testing-library/react';
import { getEvents } from '../api';
import userEvent from '@testing-library/user-event';
import Event from '../components/Event';
import App from '../App';


const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
    test('User can expand an event to see details.', ({ given, when, then }) => {
        let events;
		let AppComponent;
		let EventComponent;

        given('the user is viewing the list of events', async () => {
            events = await getEvents();
			AppComponent = render(<App />);

			EventComponent = render(<Event event={events[0]} />);

			const AppDOM = AppComponent.container.firstChild;
			const EventListDOM = AppDOM.querySelector('#event-list');

			await waitFor(() => {
				const EventListItems = within(EventListDOM).queryAllByRole('listitem');
				expect(EventListItems).toHaveLength(32);
			});
        });

        when('the user taps on a specific event', async () => {
            const moreInfoButton = screen
				.getAllByRole('button')
				.find((button) => button.getAttribute('aria-label') === 'More or Less info');

			await waitFor(() => expect(moreInfoButton).toBeInTheDocument());
			await waitFor(() => expect(moreInfoButton).toBeEnabled());
			userEvent.click(moreInfoButton);
        });

        then('the app should display the details of that event', async () => {
            await waitFor(() => {
				const eventDetails = EventComponent.container.querySelector('.eventDetails');
				expect(eventDetails).not.toBeInTheDocument();
			});
        });
    });

    test('User can collapse an event to hide details.', ({ given, when, then }) => {
        let events;
        let EventComponent;

        given('the user is viewing the details of an event', async () => {
            events = await getEvents();

			EventComponent = render(<Event event={events[0]} />);

			const moreInfoButton = await waitFor(() =>
				screen
					.getAllByRole('button')
					.find((button) => button.getAttribute('aria-label') === 'More or Less info')
			);
			await waitFor(() => expect(moreInfoButton).toBeEnabled());
			userEvent.click(moreInfoButton);

			await waitFor(() => {
				const eventDetails = EventComponent.container.querySelector('.eventDetails');
				expect(eventDetails).toBeInTheDocument();
				expect(eventDetails).toBeVisible();
			});
        });

        when('the user taps on the Hide Details option', async () => {
            const lessInfoButton = screen
				.getAllByRole('button')
				.find((button) => button.getAttribute('aria-label') === 'More or Less info');
			await waitFor(() => expect(lessInfoButton).toBeEnabled());
			userEvent.click(lessInfoButton);
        });

        then('the app should hide the event details and return to the event list', async () => {
            await waitFor(() => {
				const eventDetails = EventComponent.container.querySelector('.eventDetails');
				expect(eventDetails).not.toBeInTheDocument();
			});
        });
    });
});
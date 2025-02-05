import React from 'react';
import { render, within, waitFor } from '@testing-library/react';
import EventList from '../components/EventList';
import { getEvents } from '../api';
import App from '../App';

describe('<EventList /> component', () => {
	let EventListComponent;

	beforeEach(async () => {
		const allEvents = await getEvents();

		EventListComponent = render(<EventList events={allEvents} />);
	});

	test('has an element with "list" role', () => {
		expect(EventListComponent.queryByRole('list')).toBeInTheDocument(); //
	});

	test('renders correct number of events', async () => {
		const allEvents = await getEvents();

		EventListComponent.rerender(<EventList events={allEvents} />);
		const listItems = EventListComponent.getAllByRole('listitem');

		expect(listItems).toHaveLength(allEvents.length);
	});
});

describe('<EventList /> integration', () => {
	test('renders a list of 32 events when the app is mounted and rendered', async () => {
		const AppComponent = render(<App />);
		const AppDOM = AppComponent.container.firstChild;
		const EventListDOM = AppDOM.querySelector('#event-list');
		await waitFor(() => {
			const EventListItems = within(EventListDOM).queryAllByRole('listitem');
			expect(EventListItems).toHaveLength(32);
		});
	});
});
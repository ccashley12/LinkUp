import React from 'react';
import { render, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { extractLocations, getEvents } from '../api';

import App from '../App';
import CitySearch from '../components/CitySearch';

describe('<CitySearch /> component', () => {
	let CitySearchComponent;
	let setInfoAlert;
	let ErrorAlert;

	beforeEach(async () => {
		setInfoAlert = jest.fn();
		ErrorAlert = jest.fn();

		const allEvents = await getEvents();
		const allLocations = extractLocations(allEvents);

		CitySearchComponent = render(
			<CitySearch
				allLocations={allLocations}
				onCityChange={() => {}}
				setInfoAlert={setInfoAlert}
				ErrorAlert={ErrorAlert}
			/>
		);
	});

	test('renders text input', () => {
		const cityTextBox = CitySearchComponent.queryByRole('textbox');
		expect(cityTextBox).toBeInTheDocument();
		expect(cityTextBox).toHaveClass('city');
	});

	test('suggestions list is hidden by default', () => {
		const suggestionList = CitySearchComponent.queryByRole('list');
		expect(suggestionList).not.toBeInTheDocument();
	});

	test('renders a list of suggestions when city textbox gains focus', async () => {
		const user = userEvent.setup();
		const cityTextBox = CitySearchComponent.queryByRole('textbox');
		await user.click(cityTextBox);
		const suggestionList = CitySearchComponent.queryByRole('list');
		expect(suggestionList).toBeInTheDocument();
		expect(suggestionList).toHaveClass('suggestions');
	});

	test('updates list of suggestions correctly when user types in city textbox', async () => {
		const user = userEvent.setup();
		const cityTextBox = CitySearchComponent.queryByRole('textbox');
		await user.type(cityTextBox, 'Berlin');

		const suggestions = CitySearchComponent.container.querySelectorAll('li');
		const expectedSuggestions = ['Berlin, Germany', 'See all cities'];
		expect(suggestions).toHaveLength(expectedSuggestions.length);
		expect(suggestions[0].textContent).toBe('Berlin, Germany');
		expect(suggestions[1].textContent).toBe('See all cities');
	});

	test('renders the suggestions text in the textbox upon clicking on the suggestion', async () => {
		const user = userEvent.setup();
		const cityTextBox = CitySearchComponent.queryByRole('textbox');
		await user.type(cityTextBox, 'Berlin');

		const BerlinGermanySuggestion = CitySearchComponent.queryAllByRole('listitem')[0];
		await user.click(BerlinGermanySuggestion);
		expect(cityTextBox).toHaveValue(BerlinGermanySuggestion.textContent);
	});

	test('clears query and hides suggestions when "See all cities" is clicked', async () => {
		const user = userEvent.setup();
		const cityTextBox = CitySearchComponent.queryByRole('textbox');
		await user.type(cityTextBox, 'Berlin');

		const seeAllCitiesButton = CitySearchComponent.queryAllByRole('listitem')[1];
		await user.click(seeAllCitiesButton);

		expect(cityTextBox).toHaveValue('');

		const suggestionList = CitySearchComponent.queryByRole('list');
		expect(suggestionList).not.toBeInTheDocument();
	});

	test('sets the query and hides suggestions when a city is clicked', async () => {
		const user = userEvent.setup();
		const cityTextBox = CitySearchComponent.queryByRole('textbox');
		await user.type(cityTextBox, 'Berlin');

		const BerlinGermanySuggestion = CitySearchComponent.queryAllByRole('listitem')[0];
		await user.click(BerlinGermanySuggestion);

		expect(cityTextBox).toHaveValue('Berlin, Germany');

		const suggestionList = CitySearchComponent.queryByRole('list');
		expect(suggestionList).not.toBeInTheDocument();
	});
	test('filters locations when input value changes', async () => {
		const user = userEvent.setup();
		const cityTextBox = CitySearchComponent.queryByRole('textbox');

		await user.type(cityTextBox, 'Ber');
		const suggestions = CitySearchComponent.container.querySelectorAll('li');
		expect(suggestions).toHaveLength(2);
		expect(suggestions[0].textContent).toBe('Berlin, Germany');
		expect(suggestions[1].textContent).toBe('See all cities');
	});

	test('resets suggestions when input is cleared', async () => {
		const user = userEvent.setup();
		const cityTextBox = CitySearchComponent.queryByRole('textbox');

		await user.type(cityTextBox, 'Berlin');
		const suggestions = CitySearchComponent.container.querySelectorAll('li');
		expect(suggestions).toHaveLength(2);

		await user.clear(cityTextBox);
		await userEvent.click(document.body);

		const emptySuggestions = CitySearchComponent.container.querySelectorAll('li');
		expect(emptySuggestions).toHaveLength(1);
		expect(emptySuggestions[0].textContent).toBe('See all cities');
	});
	test('shows info alert when no matching cities are found', async () => {
		const user = userEvent.setup();
		const cityTextBox = CitySearchComponent.queryByRole('textbox');
		await user.type(cityTextBox, 'NonexistentCity');

		const suggestionList = CitySearchComponent.queryByRole('list');
		expect(suggestionList).toBeInTheDocument();

		expect(setInfoAlert).toHaveBeenCalledWith(
			'We cannot locate the city you are trying to find. Please try a different city.'
		);
	});
});
describe('<CitySearch /> integration', () => {
	test('renders suggestions list when the app is rendered.', async () => {
		const user = userEvent.setup();
		const AppComponent = render(<App />);
		const AppDOM = AppComponent.container.firstChild;

		const CitySearchDOM = AppDOM.querySelector('#city-search');
		const cityTextBox = within(CitySearchDOM).queryByRole('textbox');
		await user.click(cityTextBox);

		const allEvents = await getEvents();
		const allLocations = extractLocations(allEvents);

		const suggestionListItems = within(CitySearchDOM).queryAllByRole('listitem');
		expect(suggestionListItems).toHaveLength(allLocations.length + 1);
	});
});
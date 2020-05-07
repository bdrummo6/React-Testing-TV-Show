import React from 'react';
import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';
import mockShowData from './mockData/mockShowData';
import { fetchShow as mockFetchShow } from './api/fetchShow';

jest.mock('./api/fetchShow'); // Creates a 'mock' for the test

test('App renders properly when the user selects Season 1 in the dropdown ', async () => {
	// Arrange
	mockFetchShow.mockResolvedValueOnce(mockShowData); // mock the resolved data
	const { queryAllByTestId, getByText, queryAllByText } = render(<App />); // render App and set queries that will be used for testing

	// wait for the data to be resolved
	await waitFor(() =>
		queryAllByTestId( /season/i)
	);

	// Act: Imitating if the user clicks on the dropdown menu and then 'Season 1' in the menu
	userEvent.click(getByText( /select a season/i));
	userEvent.click(getByText( /season 1/i));

	// Assert: Check if the 8 episodes in 'Season 1' are rendered
	expect(queryAllByText(/episode/i)).toHaveLength(8);

});

test('App renders properly when the user selects Season 2 in the dropdown ', async () => {
	// Arrange
	mockFetchShow.mockResolvedValueOnce(mockShowData); // mock the resolved data
	const { queryAllByTestId, getByText, queryAllByText } = render(<App />); // render App and set queries that will be used for testing

	// wait for the data to be resolved
	await waitFor(() =>
		queryAllByTestId( /season/i)
	);

	// Act: Imitating if the user clicks on the dropdown menu and then 'Season 2' in the menu
	userEvent.click(getByText( /select a season/i));
	userEvent.click(getByText( /season 2/i));

	// Assert: Check if the 9 episodes in 'Season 2' are rendered
	expect(queryAllByText(/episode/i)).toHaveLength(9);

});

test('App renders properly when the user selects Season 3 in the dropdown ', async () => {
	// Arrange
	mockFetchShow.mockResolvedValueOnce(mockShowData); // mock the resolved data
	const { queryAllByTestId, getByText, queryAllByText } = render(<App />); // render App and set queries that will be used for testing

	// wait for the data to be resolved
	await waitFor(() =>
		queryAllByTestId( /season/i)
	);

	// Act: Imitating if the user clicks on the dropdown menu and then 'Season 3' in the menu
	userEvent.click(getByText( /select a season/i));
	userEvent.click(getByText( /season 3/i));

	// Assert: Check if the 8 episodes in 'Season 3' are rendered
	expect(queryAllByText(/episode/i)).toHaveLength(8);

});

test('App renders properly when the user selects Season 4 in the dropdown ', async () => {
	// Arrange
	mockFetchShow.mockResolvedValueOnce(mockShowData); // mock the resolved data
	const { queryAllByTestId, getByText, queryAllByText } = render(<App />); // render App and set queries that will be used for testing

	// wait for the data to be resolved
	await waitFor(() =>
		queryAllByTestId( /season/i)
	);

	// Act: Imitating if the user clicks on the dropdown menu and then 'Season 4' in the menu
	userEvent.click(getByText( /select a season/i));
	userEvent.click(getByText( /season 4/i));

	// Assert: Check if the 1 episode in 'Season 4' are rendered
	expect(queryAllByText(/episode/i)).toHaveLength(1);

});
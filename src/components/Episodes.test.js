import React from 'react';
import { render } from '@testing-library/react';

import Episodes from './Episodes';
import mockEpisodeData from '../mockData/mockEpisodeData';

// Test the Episodes components as the props change
test('Episodes renders properly when props changes', () => {
	// Initial render of Episodes component passing it an empty array via props
	const { queryAllByTestId, rerender } = render(
		<Episodes episodes={[]} />
	);

	// Assertions
	expect(queryAllByTestId(/episode/i)).toStrictEqual([]); // Assertion that an empty array was passed to Episodes
	expect(queryAllByTestId(/episode/i)).toHaveLength(0); // Assertion that no episodes have been rendered

	// Rerender Episodes with the episode data from the mockEpisodeData array
	rerender(<Episodes episodes={mockEpisodeData} />);

	// Assertion that all 8 episodes in season 1 from the mockEpisodeData array rendered
	expect(queryAllByTestId(/episode/i)).toHaveLength(8);
});
import React from 'react';
import { render } from '@testing-library/react';

import Episodes from './Episodes';

// Test the Episodes components as the props change
test('Episodes renders properly when props changes', () => {
	// Initial render of Episodes component passing it an empty array via props
	const { queryAllByTestId } = render(
		<Episodes episodes={[]} />
	);

	// Assertions
	expect(queryAllByTestId(/episode/i)).toStrictEqual([]); // Assertion that an empty array was passed to Episodes
	expect(queryAllByTestId(/episode/i)).toHaveLength(0); // Assertion that no episodes have been rendered

});

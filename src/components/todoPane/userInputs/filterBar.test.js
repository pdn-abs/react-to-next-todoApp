import { React } from 'react';
import * as filterButton from './filterButton';
import { render } from '@testing-library/react';
import filterBar from './filterBar';
import { rndString } from '@laufire/utils/random';

test('FilterBar displays the filterButtons', () => {
	const context = {
		config: {
			filters: [{ label: 'ALL',
				name: 'all' },
			{ label: 'ACTIVE',
				name: 'active' },
			{ label: 'COMPLETED',
				name: 'completed' }],
		},
		actions: {},
		state: {},
	};

	jest.spyOn(filterButton, 'default')
		.mockImplementation(() =>
			<div key={ rndString() } role="filterButton"/>);

	const { getAllByRole, getByRole } = render(filterBar(context));

	expect(getByRole('filterBar')).toBeInTheDocument();
	context.config.filters.map((filter, index) => {
		expect(filterButton.default)
			.toHaveBeenCalledWith({ ...context, data: filter });
		expect(getAllByRole('filterButton')[index]).toBeInTheDocument();
	});
});

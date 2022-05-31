import { React } from 'react';
import userInputs from './index';
import * as input from './input';
import * as filterBar from './filterBar';
import * as actionButton from './actionButton';
import { render } from '@testing-library/react';

test('User Inputs', () => {
	const context = {
		state: {
			input: Symbol('input'),
		},
	};

	jest.spyOn(input, 'default').mockReturnValue(<div role="input"/>);
	jest.spyOn(filterBar, 'default').mockReturnValue(<div role="filterBar"/>);
	jest.spyOn(actionButton, 'default')
		.mockReturnValue(<div role="actionButton"/>);

	const { getByRole } = render(userInputs(context));

	expect(getByRole('userInputs')).toBeInTheDocument();

	expect(getByRole('input')).toBeInTheDocument();
	expect(input.default).toHaveBeenCalledWith(context);

	expect(getByRole('filterBar')).toBeInTheDocument();
	expect(filterBar.default).toHaveBeenCalledWith(context);

	expect(getByRole('actionButton')).toBeInTheDocument();
	expect(actionButton.default).toHaveBeenCalledWith(context);
});

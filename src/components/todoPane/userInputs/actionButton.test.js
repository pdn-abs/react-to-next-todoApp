import { React } from 'react';
import { render } from '@testing-library/react';
import actionButton from './actionButton';
import * as editButton from './editButton';
import * as addButton from './addButton';

describe('ActionButton', () => {
	test('EditButton edits the todo', () => {
		const context = {
			state: {
				editing: true,
			},
		};

		jest.spyOn(editButton, 'default')
			.mockReturnValue(<div role="editButton"/>);

		const { getByRole } = render(actionButton(context));

		expect(getByRole('editButton')).toBeInTheDocument();
		expect(editButton.default).toHaveBeenCalledWith(context);
	});

	test('AddButton adds the todo', () => {
		const context = {
			state: {
				editing: false,
			},
		};

		jest.spyOn(addButton, 'default')
			.mockReturnValue(<div role="AddButton"/>);

		const { getByRole } = render(actionButton(context));

		expect(getByRole('AddButton')).toBeInTheDocument();
		expect(addButton.default).toHaveBeenCalledWith(context);
	});
});

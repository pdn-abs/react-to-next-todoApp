import { render, fireEvent } from '@testing-library/react';
import editButton from './editButton';
import TodoManager from '../../../services/todoManager';

describe('editButton', () => {
	const context = {
		actions: {
			editTodo: jest.fn(),
		},
		state: {
			input: Symbol('input'),
		},
	};

	test('Displays editButton', () => {
		const component = render(editButton(context))
			.getByRole('editButton');

		expect(component).toBeInTheDocument();
		expect(component).toHaveTextContent('EDIT');
	});

	test('Clicking EditButton will edits the todo ', () => {
		const component = render(editButton(context))
			.getByRole('editButton');

		fireEvent.click(component);

		expect(context.actions.editTodo).toHaveBeenCalledWith();
	});

	test('EditButton under disabled condition', () => {
		jest.spyOn(TodoManager, 'hasInput')
			.mockReturnValue(true);

		const component = render(editButton(context))
			.getByRole('editButton');

		expect(component).toBeDisabled();
		expect(TodoManager.hasInput)
			.toHaveBeenCalledWith(context);
	});

	test('EditButton under enabled condition', () => {
		jest.spyOn(TodoManager, 'hasInput')
			.mockReturnValue(false);

		const component = render(editButton(context))
			.getByRole('editButton');

		expect(component).not.toBeDisabled();
		expect(TodoManager.hasInput)
			.toHaveBeenCalledWith(context);
	});
});

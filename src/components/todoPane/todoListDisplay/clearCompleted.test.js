import clearCompleted from './clearCompleted';
import { render, fireEvent } from '@testing-library/react';
import TodoManager from '../../../services/todoManager';

describe('Clear Completed', () => {
	const context = {
		actions: {
			getClearCompleted: jest.fn(),
		},
		state: {
			todoList: Symbol('todoList'),
		},
	};

	test('Displays FilterButton', () => {
		jest.spyOn(TodoManager, 'hasCompletedTodo')
			.mockReturnValue(true);

		const component = render(clearCompleted(context))
			.getByRole('clearCompleted');

		expect(component).toBeInTheDocument();
	});
	test('OnClick clears all the completed todos', () => {
		jest.spyOn(TodoManager, 'hasCompletedTodo')
			.mockReturnValue(true);

		const component = render(clearCompleted(context))
			.getByRole('clearCompleted');

		fireEvent.click(component);

		expect(context.actions.getClearCompleted)
			.toHaveBeenCalledWith();
	});
	test('Button under disabled condition', () => {
		jest.spyOn(TodoManager, 'hasCompletedTodo')
			.mockReturnValue(false);

		const component = render(clearCompleted(context))
			.getByRole('clearCompleted');

		expect(component).toBeDisabled();
		expect(TodoManager.hasCompletedTodo)
			.toHaveBeenCalledWith(context);
	});

	test('Button under enabled condition', () => {
		jest.spyOn(TodoManager, 'hasCompletedTodo')
			.mockReturnValue(true);

		const component = render(clearCompleted(context))
			.getByRole('clearCompleted');

		expect(component).not.toBeDisabled();
		expect(TodoManager.hasCompletedTodo)
			.toHaveBeenCalledWith(context);
	});
});

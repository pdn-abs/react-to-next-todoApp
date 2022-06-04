/* eslint-disable max-len */
import TodoManager from '../../../services/todoManager';
import { fireEvent, render } from '@testing-library/react';
import toggleAllCheckBox from './toggleAllCheckBox';

describe('ToggleAllCheckBox', () => {
	const context = {
		state: {
			todoList: [],
		},
		actions: {
			toggleTodoList: jest.fn(),
		},
	};

	test('ToggleAllCheckBox is not visible when todoList is empty', () => {
		jest.spyOn(TodoManager, 'hasNoTodos').mockReturnValue(true);

		const component = render(toggleAllCheckBox(context)).getByRole('toggleAllCheckBox');

		expect(TodoManager.hasNoTodos)
			.toHaveBeenCalledWith(context);
		expect(component).toBeDisabled();
	});

	test('ToggleAllCheckBox is visible when todoList has todos', () => {
		jest.spyOn(TodoManager, 'hasNoTodos').mockReturnValue(false);

		const component = render(toggleAllCheckBox(context))
			.getByRole('toggleAllCheckBox');

		expect(TodoManager.hasNoTodos)
			.toHaveBeenCalledWith(context);
		expect(component).not.toBeDisabled();
	});

	test('when ToggleAllCheckBox is checked,all todos are selected ', () => {
		const isChecked = false;

		jest.spyOn(TodoManager, 'isAllChecked')
			.mockReturnValue(isChecked);
		jest.spyOn(TodoManager, 'hasNoTodos')
			.mockReturnValue(false);

		const component = render(toggleAllCheckBox(context))
			.getByRole('toggleAllCheckBox');

		fireEvent.click(component);

		expect(TodoManager.isAllChecked)
			.toHaveBeenCalledWith(context);
		expect(context.actions.toggleTodoList)
			.toHaveBeenCalledWith(!isChecked);
	});

	test('when ToggleAllCheckBox is unselected, all todos are unselected ', () => {
		const selectAll = true;

		jest.spyOn(TodoManager, 'isAllChecked')
			.mockReturnValue(selectAll);
		jest.spyOn(TodoManager, 'hasNoTodos')
			.mockReturnValue(false);

		const component = render(toggleAllCheckBox(context))
			.getByRole('toggleAllCheckBox');

		fireEvent.click(component);

		expect(TodoManager.isAllChecked)
			.toHaveBeenLastCalledWith(context);
		expect(context.actions.toggleTodoList)
			.toHaveBeenCalledWith(!selectAll);
	});
});

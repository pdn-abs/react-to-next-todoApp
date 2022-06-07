import { React } from 'react';
import TodoListDisplay from './index';
import * as ToggleAllCheckBox from './toggleAllCheckBox';
import * as TodoList from './todoList';
import * as ClearCompleted from './clearCompleted';
import { render } from '@testing-library/react';

test('TodoListDisplay', () => {
	const context = Symbol('context');

	jest.spyOn(ToggleAllCheckBox, 'default')
		.mockReturnValue(<div role="toggleAllCheckBox"/>);

	jest.spyOn(TodoList, 'default').mockReturnValue(<div role="todoList"/>);

	jest.spyOn(ClearCompleted, 'default')
		.mockReturnValue(<div role="clearCompleted"/>);

	const { getByRole } = render(TodoListDisplay(context));

	expect(getByRole('TodoListDisplay')).toBeInTheDocument();
	expect(getByRole('TodoListDisplay')).toHaveClass('todoList');

	expect(getByRole('toggleAllCheckBox')).toBeInTheDocument();
	expect(ToggleAllCheckBox.default).toHaveBeenCalledWith(context);

	expect(getByRole('todoList')).toBeInTheDocument();
	expect(TodoList.default).toHaveBeenCalledWith(context);

	expect(getByRole('clearCompleted')).toBeInTheDocument();
	expect(ClearCompleted.default).toHaveBeenCalledWith(context);
});

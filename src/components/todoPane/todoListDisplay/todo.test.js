import { React } from 'react';
import Todo from './todo.js';
import * as TodoCheckBox from './todoCheckBox';
import * as RemoveButton from './removeButton';

import { fireEvent, render } from '@testing-library/react';
import { rndString } from '@laufire/utils/random';

describe('Todo', () => {
	const data = {
		todo: rndString(),
	};
	const context = {
		actions: {
			setEditing: jest.fn(),
		},
		data: data,
	};
	const { actions } = context;

	test('todo-Displays todoCheckBox & remove Button', () => {
		jest.spyOn(TodoCheckBox, 'default')
			.mockReturnValue(<div role="toggleTodo"/>);

		jest.spyOn(RemoveButton, 'default')
			.mockReturnValue(<div role="removeButton"/>);

		const { getByRole } = render(Todo(context));

		expect(getByRole('todo')).toBeInTheDocument();

		expect(getByRole('toggleTodo')).toBeInTheDocument();
		expect(TodoCheckBox.default).toHaveBeenCalledWith(context);

		expect(getByRole('removeButton')).toBeInTheDocument();
		expect(RemoveButton.default).toHaveBeenCalledWith(context);
	});
	test('setEditing - edits the todo', () => {
		const component = render(Todo(context))
			.getByRole('setEditing');

		expect(component).toHaveTextContent(data.todo);

		fireEvent.click(component);

		expect(actions.setEditing).toHaveBeenCalledWith(data);
	});
});

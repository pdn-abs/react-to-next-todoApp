import TodoManager from '../../../services/todoManager';
import todoList from './todoList';
import { React } from 'react';
import { render } from '@testing-library/react';
import * as Todo from './todo';
import { range } from '@laufire/utils/collection';
import { rndBetween, rndString } from '@laufire/utils/random';

test('TodoList', () => {
	const context = {
		state: {
			filter: Symbol('filter'),
			todoList: Symbol('todo'),
		},
	};

	const filteredTodo = range(1, rndBetween()).map(Symbol);

	jest.spyOn(TodoManager, 'filterTodos')
		.mockReturnValue(filteredTodo);
	jest.spyOn(Todo, 'default')
		.mockImplementation(() => <div key={ rndString() } role="todo"/>);

	const { getAllByRole } = render(todoList(context));

	expect(TodoManager.filterTodos)
		.toHaveBeenCalledWith(context, context.state.filter);
	filteredTodo.map((todo, index) => {
		expect(Todo.default)
			.toHaveBeenCalledWith({ ...context, data: todo });
		expect(getAllByRole('todo')[index]).toBeInTheDocument();
	});
});

import TodoManager from '../../../services/todoManager';
import todoList from './todoList';
import * as Todo from './todo';
import { range } from '@laufire/utils/collection';
import { rndBetween } from '@laufire/utils/random';
describe('TodoList', () => {
	const text = Symbol('text');
	const context = {
		state: {
			filter: Symbol('filter'),
			todoList: Symbol('todoList'),
		},
	};

	const filteredTodo = range(1, rndBetween()).map(Symbol);

	test('TodoList - when todoList has todos', () => {
		const noTodos = false;

		jest.spyOn(TodoManager, 'hasNoTodos')
			.mockReturnValue(noTodos);
		jest.spyOn(TodoManager, 'filterTodos')
			.mockReturnValue(filteredTodo);
		jest.spyOn(Todo, 'default')
			.mockReturnValue();

		const result = todoList(context);

		expect(TodoManager.filterTodos)
			.toHaveBeenCalledWith(context, context.state.filter);
		const expectation = filteredTodo.map((todo) => {
			expect(Todo.default)
				.toHaveBeenCalledWith({ ...context, data: todo });
		});

		expect(result).toEqual(expectation);
	});
	test('TodoList - when todoList is empty', () => {
		const noTodos = true;

		jest.spyOn(TodoManager, 'hasNoTodos')
			.mockReturnValue(noTodos);
		jest.spyOn(TodoManager, 'filterTodos')
			.mockReturnValue(filteredTodo);
		jest.spyOn(Todo, 'default')
			.mockReturnValue(text);

		const result = todoList(context);

		expect(TodoManager.filterTodos)
			.toHaveBeenCalledWith(context, context.state.filter);
		expect(result).toEqual([]);
	});
});

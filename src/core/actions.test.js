import actions from './actions';
import TodoManager from '../services/todoManager';

describe('actions', () => {
	const { setInput, addTodo, toggleTodo, toggleTodoList,
		setFilter } = actions;
	const context = Symbol('context');

	test('SetInput- sets the given input', () => {
		const data = Symbol('input') ;
		const result = setInput({ data });

		expect(result).toEqual({ input: data });
	});
	test('AddTodo- Adds the given to TodoList', () => {
		const addedTodo = Symbol('addedTodo');

		jest.spyOn(TodoManager, 'addTodo').mockReturnValue(addedTodo);

		const expectation = { input: '', todoList: addedTodo };
		const result = addTodo(context);

		expect(TodoManager.addTodo)
			.toHaveBeenCalledWith(context);
		expect(result).toEqual(expectation);
	});
	test('ToggleTodo - toggles the todo', () => {
		const toggledTodo = Symbol('toggledTodo');

		jest.spyOn(TodoManager, 'toggleTodo').mockReturnValue(toggledTodo);

		const expectation = { todoList: toggledTodo };
		const result = toggleTodo(context);

		expect(TodoManager.toggleTodo).toHaveBeenCalledWith(context);
		expect(result).toEqual(expectation);
	});
	test('ToggleTodoList - toggles all the todos', () => {
		const toggledAllTodos = Symbol('toggledAllTodos');

		jest.spyOn(TodoManager, 'toggleTodoList')
			.mockReturnValue(toggledAllTodos);

		const expectation = { todoList: toggledAllTodos };
		const result = toggleTodoList(context);

		expect(TodoManager.toggleTodoList)
			.toHaveBeenCalledWith(context);
		expect(result).toEqual(expectation);
	});
	test('SetFilter - sets a particular filter', () => {
		const data = Symbol('filter') ;
		const result = setFilter({ data });

		expect(result).toEqual({ filter: data });
	});
});

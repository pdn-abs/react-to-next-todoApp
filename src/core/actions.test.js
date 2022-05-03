import actions from './actions';
import TodoManager from '../services/todoManager';

describe('actions', () => {
	const { setInput, addTodo, toggleTodo } = actions;
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
});

import actions from './actions';
import TodoManager from '../services/todoManager';

describe('actions', () => {
	const { setInput, addTodo, toggleTodo, toggleTodoList,
		setFilter, setEditing, editTodo, removeTodo } = actions;
	const context = Symbol('context');

	test('setInput- sets the given input', () => {
		const data = Symbol('input') ;
		const result = setInput({ data });

		expect(result).toEqual({ input: data });
	});
	test('addTodo- Adds the given to TodoList', () => {
		const addedTodo = Symbol('addedTodo');

		jest.spyOn(TodoManager, 'addTodo').mockReturnValue(addedTodo);

		const expectation = { input: '', todoList: addedTodo };
		const result = addTodo(context);

		expect(TodoManager.addTodo)
			.toHaveBeenCalledWith(context);
		expect(result).toEqual(expectation);
	});
	test('toggleTodo - toggles the todo', () => {
		const toggledTodo = Symbol('toggledTodo');

		jest.spyOn(TodoManager, 'toggleTodo').mockReturnValue(toggledTodo);

		const expectation = { todoList: toggledTodo };
		const result = toggleTodo(context);

		expect(TodoManager.toggleTodo).toHaveBeenCalledWith(context);
		expect(result).toEqual(expectation);
	});
	test('toggleTodoList - toggles all the todos', () => {
		const toggledAllTodos = Symbol('toggledAllTodos');

		jest.spyOn(TodoManager, 'toggleTodoList')
			.mockReturnValue(toggledAllTodos);

		const expectation = { todoList: toggledAllTodos };
		const result = toggleTodoList(context);

		expect(TodoManager.toggleTodoList)
			.toHaveBeenCalledWith(context);
		expect(result).toEqual(expectation);
	});
	test('setFilter - sets a particular filter', () => {
		const data = Symbol('filter') ;
		const result = setFilter({ data });

		expect(result).toEqual({ filter: data });
	});
	test('setEditing - sets the editing', () => {
		const data = { todo: Symbol('todo') };
		const result = setEditing({ data });

		expect(result).toEqual({ editing: data, input: data.todo });
	});
	test('edit Todo - edits the Todo ', () => {
		const editedTodo = Symbol('editedTodo');

		jest.spyOn(TodoManager, 'editTodo').mockReturnValue(editedTodo);

		const expectation = { todoList: editedTodo, input: '', editing: null };
		const result = editTodo(context);

		expect(TodoManager.editTodo)
			.toHaveBeenCalledWith(context);
		expect(result).toEqual(expectation);
	});
	test('removeTodo - removes the given todo', () => {
		const removedTodo = Symbol('removedTodo');

		jest.spyOn(TodoManager, 'removeTodo').mockReturnValue(removedTodo);

		const expectation = { todoList: removedTodo };
		const result = removeTodo(context);

		expect(TodoManager.removeTodo).toHaveBeenCalledWith(context);
		expect(result).toEqual(expectation);
	});
});

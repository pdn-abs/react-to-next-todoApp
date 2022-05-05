import actions from './actions';
import TodoManager from '../services/todoManager';
import TaskManager from '../services/taskManager';

describe('actions', () => {
	const { setInput, addTodo, toggleTodo, toggleTodoList,
		setFilter, setEditing, editTodo, removeTodo,
		getClearCompleted, setTasks, addTasks } = actions;
	const context = Symbol('context');
	const todoList = Symbol('todoList');
	const taskList = Symbol('taskList');

	test('setInput- sets the given input', () => {
		const data = Symbol('input') ;
		const result = setInput({ data });

		expect(result).toEqual({ input: data });
	});
	test('addTodo- Adds the given to TodoList', () => {
		jest.spyOn(TodoManager, 'addTodo').mockReturnValue(todoList);

		const expectation = { input: '', todoList: todoList };
		const result = addTodo(context);

		expect(TodoManager.addTodo)
			.toHaveBeenCalledWith(context);
		expect(result).toEqual(expectation);
	});
	test('toggleTodo - toggles the todo', () => {
		jest.spyOn(TodoManager, 'toggleTodo').mockReturnValue(todoList);

		const expectation = { todoList };
		const result = toggleTodo(context);

		expect(TodoManager.toggleTodo).toHaveBeenCalledWith(context);
		expect(result).toEqual(expectation);
	});
	test('toggleTodoList - toggles all the todos', () => {
		jest.spyOn(TodoManager, 'toggleTodoList')
			.mockReturnValue(todoList);

		const expectation = { todoList };
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
		jest.spyOn(TodoManager, 'editTodo').mockReturnValue(todoList);

		const expectation = { todoList: todoList, input: '', editing: null };
		const result = editTodo(context);

		expect(TodoManager.editTodo)
			.toHaveBeenCalledWith(context);
		expect(result).toEqual(expectation);
	});
	test('removeTodo - removes the given todo', () => {
		jest.spyOn(TodoManager, 'removeTodo').mockReturnValue(todoList);

		const expectation = { todoList };
		const result = removeTodo(context);

		expect(TodoManager.removeTodo).toHaveBeenCalledWith(context);
		expect(result).toEqual(expectation);
	});
	test('getClearCompleted - removes all the Completed todos', () => {
		jest.spyOn(TodoManager, 'clearCompleted')
			.mockReturnValue(todoList);

		const expectation = { todoList };
		const result = getClearCompleted(context);

		expect(TodoManager.clearCompleted)
			.toHaveBeenCalledWith(context);
		expect(result).toEqual(expectation);
	});
	test('setTask- sets the tasks', () => {
		const data = Symbol('data') ;

		const result = setTasks({ data });

		expect(result).toEqual({ taskList: data });
	});
	test('addTasks- Adds the given to TaskList', () => {
		jest.spyOn(TaskManager, 'addTask').mockReturnValue(taskList);

		const expectation = { taskList };
		const result = addTasks(context);

		expect(TaskManager.addTask)
			.toHaveBeenCalledWith(context);
		expect(result).toEqual(expectation);
	});
});

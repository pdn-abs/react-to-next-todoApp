import TodoManager from './todoManager.js';
import * as random from '@laufire/utils/random';

describe('todoManager', () => {
	const { addTodo, toggleTodo, toggleTodoList,
		hasNoTodos, isAllChecked, hasCompletedTodo,
		filters, filterTodos, editTodo, removeTodo,
		clearCompleted, addTaskToTodo } = TodoManager;
	const id = Symbol('id');
	const todo = Symbol('todo');
	const completed = Symbol('completed');

	test('add Todo - adds the given todo', () => {
		const context = {
			state: { todoList: [
				{ id, todo, completed },
			],
			input: Symbol('input') },
			config: { idLength: Symbol('idLength') },

		};

		jest.spyOn(random, 'rndString').mockReturnValue(id);

		const result = addTodo(context);

		expect(random.rndString)
			.toHaveBeenCalledWith(context.config.idLength);

		expect(result).toEqual([
			{ id, todo, completed },
			{ id: id,
				todo: context.state.input,
				completed: false },
		]);
	});
	test('toggle Todo', () => {
		const context = {
			state: { todoList: [{ id: 'MFMULLYR',
				todo: 'Submit the Code',
				completed: false },
			{ id: 'LFMUHLYR',
				todo: 'Debug the Code',
				completed: false }] },
			data: { id: 'LFMUHLYR',
				todo: 'Debug the Code',
				completed: false },

		};
		const result = toggleTodo(context);

		expect(result).toEqual([{ id: 'MFMULLYR',
			todo: 'Submit the Code',
			completed: false },
		{ id: 'LFMUHLYR',
			todo: 'Debug the Code',
			completed: true }]);
	});
	describe('toggle TodoList', () => {
		test('toggle TodoList-data is true', () => {
			const context = {
				state: { todoList: [{ id: 'MFMULLYR',
					todo: 'Submit the Code',
					completed: false },
				{ id: 'LFMUHLYR',
					todo: 'Debug the Code',
					completed: false }] },
				data: true,

			};
			const result = toggleTodoList(context);

			expect(result).toEqual([{ id: 'MFMULLYR',
				todo: 'Submit the Code',
				completed: true },
			{ id: 'LFMUHLYR',
				todo: 'Debug the Code',
				completed: true }]);
		});
		test('toggle TodoList-data is false', () => {
			const context = {
				state: { todoList: [{ id: 'MFMULLYR',
					todo: 'Submit the Code',
					completed: true },
				{ id: 'LFMUHLYR',
					todo: 'Debug the Code',
					completed: true }] },
				data: false,

			};
			const result = toggleTodoList(context);

			expect(result).toEqual([{ id: 'MFMULLYR',
				todo: 'Submit the Code',
				completed: false },
			{ id: 'LFMUHLYR',
				todo: 'Debug the Code',
				completed: false }]);
		});
	});
	describe('has No Todos', () => {
		test('has No Todos - TodoList Empty', () => {
			const context = {
				state: { todoList: [] },
			};
			const result = hasNoTodos(context);

			expect(result).toEqual(true);
		});
		test('has No Todos - TodoList has todos', () => {
			const context = {
				state: { todoList: [{ id: 'MFMULLYR',
					todo: 'Submit the Code',
					completed: false },
				{ id: 'LFMUHLYR',
					todo: 'Debug the Code',
					completed: false }] },

			};
			const result = hasNoTodos(context);

			expect(result).toEqual(false);
		});
	});
	describe('is All Checked ', () => {
		test('is All Checked - All Todos Selected', () => {
			const context = {
				state: { todoList: [{ completed: true },
					{ completed: true }] },
			};
			const result = isAllChecked(context);

			expect(result).toEqual(true);
		});
		test('is All Checked - Not All Todos Selected', () => {
			const context = {
				state: { todoList: [{ completed: true },
					{ completed: false }] },

			};
			const result = isAllChecked(context);

			expect(result).toEqual(false);
		});
	});
	describe('has Completed Todos ', () => {
		test('has Completed Todos - One Todo Selected', () => {
			const context = {
				state: { todoList: [{ completed: false },
					{ completed: true }] },
			};
			const result = hasCompletedTodo(context);

			expect(result).toEqual(true);
		});
		test('has Completed Todos - None of the Todos Selected', () => {
			const context = {
				state: { todoList: [{ completed: false },
					{ completed: false }] },

			};
			const result = hasCompletedTodo(context);

			expect(result).toEqual(false);
		});
	});
	describe('filters', () => {
		test('filters - All', () => {
			const result = filters.all();

			expect(result).toEqual(true);
		});
		test('filters - Active', () => {
			const todo = { completed: false };
			const result = filters.active(todo);

			expect(result).toEqual(true);
		});
		test('filters - Completed', () => {
			const todo = { completed: true };
			const result = filters.completed(todo);

			expect(result).toEqual(true);
		});
	});
	describe('filter Todos', () => {
		const todoList = Symbol('todoList');

		test('filter Todos - when Filter - All button clicked', () => {
			const context = {
				state: { todoList: [
					{ completed: false },
					{ completed: false },
					{ completed: true },
					{ completed: true },
				],
				filter: 'all' },
			};
			const expectation = [
				{ completed: false },
				{ completed: false },
				{ completed: true },
				{ completed: true },
			];

			jest.spyOn(TodoManager.filters, 'all').mockReturnValue(todoList);

			const result = filterTodos(context);

			expect(TodoManager.filters.all).toHaveBeenCalled();
			expect(result).toEqual(expectation);
		});
		test('filter Todos - when Filter - Active button clicked', () => {
			const context = {
				state: { todoList: [
					{ completed: false },
					{ completed: false },
					{ completed: true },
					{ completed: true },
				],
				filter: 'active' },

			};
			const expectation = [{ completed: false },
				{ completed: false },
				{ completed: true },
				{ completed: true }];

			jest.spyOn(TodoManager.filters, 'active')
				.mockReturnValue(true);
			const result = filterTodos(context);

			context.state.todoList.forEach((
				todo, i, todos
			) => {
				expect(TodoManager.filters.active)
					.toHaveBeenCalledWith(
						todo, i, todos
					);
			});
			expect(result).toEqual(expectation);
		});
		test('filter Todos - when Filter - Completed button clicked', () => {
			const context = {
				state: { todoList: [
					{ completed: false },
					{ completed: false },
					{ completed: true },
					{ completed: true },
				],
				filter: 'completed' },

			};
			const expectation = [{ completed: false },
				{ completed: false },
				{ completed: true },
				{ completed: true }];

			jest.spyOn(TodoManager.filters, 'completed')
				.mockReturnValue(true);
			const result = filterTodos(context);

			context.state.todoList.forEach((
				todo, i, todos
			) => {
				expect(TodoManager.filters.completed)
					.toHaveBeenCalledWith(
						todo, i, todos
					);
			});
			expect(result).toEqual(expectation);
		});
	});
	test('edit Todo ', () => {
		const context = {
			state: { todoList: [{ id: 'MFMULLYR',
				todo: 'Submit the Code' }],
			editing: { id: 'MFMULLYR', todo: 'Submit the Code' },
			input: 'Commit the code' },
		};
		const result = editTodo(context);

		expect(result).toEqual([{ id: 'MFMULLYR',
			todo: 'Commit the code' }]);
	});
	test('remove Todo ', () => {
		const context = {
			data: { id: 'LFMUHLYR' },
			state: { todoList: [{ id: 'MFMULLYR',
				todo: 'Submit the Code' },
			{ id: 'LFMUHLYR',
				todo: 'Debug the Code' }] },

		};
		const result = removeTodo(context);

		expect(result).toEqual([{ id: 'MFMULLYR',
			todo: 'Submit the Code' }]);
	});
	test('clear Completed Todos', () => {
		const context = {
			state: { todoList: [
				{ completed: false },
				{ completed: false },
				{ completed: true },
				{ completed: true },
			] },
		};
		const result = clearCompleted(context);

		expect(result).toEqual([{ completed: false },
			{ completed: false }]);
	});
	test('addTaskToTodo - adds the selected task to todoList', () => {
		const context = {
			state: { todoList: [{ id: 'MFMULLYR',
				todo: 'Submit the Code',
				completed: false }] },
			data: { id: 'LFMUHLYR',
				todo: 'Debug the Code' },

		};
		const result = addTaskToTodo(context);

		expect(result).toEqual([{ id: 'MFMULLYR',
			todo: 'Submit the Code',
			completed: false },
		{ id: 'LFMUHLYR',
			todo: 'Debug the Code',
			completed: false }]);
	});
});

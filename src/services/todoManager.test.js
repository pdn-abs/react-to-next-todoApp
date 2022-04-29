import TodoManager from './todoManager.js';
describe('todoManager', () => {
	const { addTodo, toggleTodo, toggleTodoList,
		hasNoTodos, isAllChecked, hasCompletedTodo,
		filters, filterTodos, editTodo, removeTodo,
		clearCompleted } = TodoManager;

	test('Add Todo - adds the given todo', () => {
		const context = {
			state: { todoList: [{ id: 'MFMULLYR',
				todo: 'Submit the Code',
				completed: false }],
			input: 'Debug the Code' },
			config: { idLength: 4 },

		};
		const result = addTodo(context);

		expect(result).toEqual([{ id: 'MFMULLYR',
			todo: 'Submit the Code',
			completed: false },
		{ id: expect.any(String),
			todo: 'Debug the Code',
			completed: false }]);
	});
	test('Toggle Todo', () => {
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
	describe('Toggle TodoList', () => {
		test('Toggle TodoList-data is true', () => {
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
		test('Toggle TodoList-data is false', () => {
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
	describe('Has No Todos', () => {
		test('Has No Todos - TodoList Empty', () => {
			const context = {
				state: { todoList: [] },
			};
			const result = hasNoTodos(context);

			expect(result).toEqual(true);
		});
		test('Has No Todos - TodoList has todos', () => {
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
	describe('Is All Checked ', () => {
		test('Is All Checked - All Todos Selected', () => {
			const context = {
				state: { todoList: [{ completed: true },
					{ completed: true }] },
			};
			const result = isAllChecked(context);

			expect(result).toEqual(true);
		});
		test('Is All Checked - Not All Todos Selected', () => {
			const context = {
				state: { todoList: [{ completed: true },
					{ completed: false }] },

			};
			const result = isAllChecked(context);

			expect(result).toEqual(false);
		});
	});
	describe('Has Completed Todos ', () => {
		test('Has Completed Todos - One Todo Selected', () => {
			const context = {
				state: { todoList: [{ completed: false },
					{ completed: true }] },
			};
			const result = hasCompletedTodo(context);

			expect(result).toEqual(true);
		});
		test('Has Completed Todos - None of the Todos Selected', () => {
			const context = {
				state: { todoList: [{ completed: false },
					{ completed: false }] },

			};
			const result = hasCompletedTodo(context);

			expect(result).toEqual(false);
		});
	});
	describe('Filters', () => {
		test('Filters - All', () => {
			const result = filters.all();

			expect(result).toEqual(true);
		});
		test('Filters - Active', () => {
			const todo = { completed: false };
			const result = filters.active(todo);

			expect(result).toEqual(true);
		});
		test('Filters - Completed', () => {
			const todo = { completed: true };
			const result = filters.completed(todo);

			expect(result).toEqual(true);
		});
	});
	describe('Filter Todos', () => {
		test('Filter Todos - when Filter - All button clicked', () => {
			const context = {
				state: { todoList: [
					{ completed: false },
					{ completed: false },
					{ completed: true },
					{ completed: true },
				],
				filter: 'all' },
			};
			const result = filterTodos(context);

			expect(result).toEqual([
				{ completed: false },
				{ completed: false },
				{ completed: true },
				{ completed: true },
			]);
		});
		test('Filter Todos - when Filter - Active button clicked', () => {
			const context = {
				state: { todoList: [
					{ completed: false },
					{ completed: false },
					{ completed: true },
					{ completed: true },
				],
				filter: 'active' },

			};
			const result = filterTodos(context);

			expect(result).toEqual([{ completed: false },
				{ completed: false }]);
		});
		test('Filter Todos - when Filter - Completed button clicked', () => {
			const context = {
				state: { todoList: [
					{ completed: false },
					{ completed: false },
					{ completed: true },
					{ completed: true },
				],
				filter: 'completed' },

			};
			const result = filterTodos(context);

			expect(result).toEqual([{ completed: true },
				{ completed: true }]);
		});
	});
	test('Edit Todo ', () => {
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
	test('Remove Todo ', () => {
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
	test('Clear Completed Todos', () => {
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
});

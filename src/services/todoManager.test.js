/* eslint-disable no-empty-pattern */
import TodoManager from './todoManager.js';
describe('todoManager', () => {
	const { addTodo, toggleTodo, toggleTodoList,
		hasNoTodos } = TodoManager;

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
});

/* eslint-disable no-empty-pattern */
import TodoManager from './todoManager.js';
describe('todoManager', () => {
	const { addTodo, toggleTodo } = TodoManager;

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
});

import TaskManager from './taskManager';
describe('taskManager', () => {
	const { getTask, removeTask, addTask } = TaskManager;

	test('getTask', () => {
		const context = {
			config: { idLength: 4 },
			data: 'Test the code',
		};
		const result = getTask(context);

		expect(result).toEqual({ id: expect.any(String),
			todo: 'Test the code' });
	});
	test('removeTask', () => {
		const context = {
			state: { taskList: [{ id: 'MFMULLYR', todo: 'Debug the code' },
				{ id: 'LFMUHLYR', todo: 'Test the code' }] },
			data: { id: 'LFMUHLYR' },
		};
		const result = removeTask(context);

		expect(result).toEqual([{ id: 'MFMULLYR', todo: 'Debug the code' }]);
	});
	describe('addTask ', () => {
		test('addTask -TaskList length is less than MaxTaskListLength', () => {
			const context = {
				config: { idLength: 8, maxTaskListLength: 5 },
				data: 'Test the code',
				state: {
					taskList: [{ id: 'MFMULLYR', todo: 'Debug the code' }],
				},
			};
			const todo = { id: expect.any(String), todo: 'Test the code' };

			jest.spyOn(TaskManager, 'getTask').mockReturnValue(todo);
			const expectation = [{ id: 'MFMULLYR', todo: 'Debug the code' },
				{ id: expect.any(String), todo: 'Test the code' }];
			const result = addTask(context);

			expect(TaskManager.getTask).toHaveBeenCalledWith(context);
			expect(result).toEqual(expectation);
		});
		test('addTask -TaskList length exceeds MaxTaskListLength', () => {
			const context = {
				config: { idLength: 8, maxTaskListLength: 5 },
				data: 'Test the code',
				state: {
					taskList: [{ id: 'MFMULLYR' },
						{ id: 'DEMULLYR' },
						{ id: 'DFAULLYR' },
						{ id: 'AFMULLYR' },
						{ id: 'DAMULLYR' },
						{ id: 'DFAULLYR' }],
				},
			};
			const result = addTask(context);

			expect(result).toEqual([{ id: 'MFMULLYR' },
				{ id: 'DEMULLYR' },
				{ id: 'DFAULLYR' },
				{ id: 'AFMULLYR' },
				{ id: 'DAMULLYR' },
				{ id: 'DFAULLYR' }]);
		});
	});
});

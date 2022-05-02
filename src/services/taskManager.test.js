import TaskManager from './taskManager';
describe('taskManager', () => {
	const { getTask, removeTask } = TaskManager;

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
});

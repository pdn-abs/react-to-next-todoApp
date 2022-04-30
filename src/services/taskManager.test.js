import TaskManager from './taskManager';
describe('taskManager', () => {
	const { getTask } = TaskManager;

	test('getTask', () => {
		const context = {
			config: { idLength: 4 },
			data: 'Test the code',
		};
		const result = getTask(context);

		expect(result).toEqual({ id: expect.any(String),
			todo: 'Test the code' });
	});
});

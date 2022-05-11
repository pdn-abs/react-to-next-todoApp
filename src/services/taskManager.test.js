import { range } from '@laufire/utils/collection';
import { rndBetween } from '@laufire/utils/lib';
import * as random from '@laufire/utils/random';
import TaskManager from './taskManager';

describe('taskManager', () => {
	const { getTask, init, removeTask, addTask } = TaskManager;

	test('getTask', () => {
		const id = Symbol('id');

		const context = {
			config: { idLength: Symbol('idLength') },
			data: Symbol('Test the code'),
		};

		jest.spyOn(random, 'rndString').mockReturnValue(id);

		const result = getTask(context);

		expect(random.rndString)
			.toHaveBeenCalledWith(context.config.idLength);
		expect(result).toEqual({ id: id, todo: context.data });
	});
	test('init', () => {
		const todo = Symbol('todo');
		const context = {
			actions: {
				setTasks: jest.fn(),
			},
			config: {
				tasks: range(0, rndBetween()),
			},
		};

		jest.spyOn(context.actions, 'setTasks').mockReturnValue();
		jest.spyOn(TaskManager, 'getTask').mockReturnValue(todo);

		init(context);

		const setTask = context.config.tasks.map(() => todo);

		context.config.tasks.map((task) =>
			expect(TaskManager.getTask)
				.toHaveBeenCalledWith({ ...context, data: task }));
		expect(context.actions.setTasks)
			.toHaveBeenCalledWith(setTask);
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

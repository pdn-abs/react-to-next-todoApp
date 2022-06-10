import { range } from '@laufire/utils/collection';
import { render } from '@testing-library/react';
import * as Task from './task.js';
import { React } from 'react';
import TaskList from './taskList.js';
import { rndBetween, rndString } from '@laufire/utils/random';

test('TaskList- lists the tasks', () => {
	const context = {
		state: {
			taskList: range(1, rndBetween()).map(Symbol),
		},
	};

	jest.spyOn(Task, 'default')
		.mockReturnValue(<div key={ rndString() } role="Task"/>);

	const { getAllByRole } = render(TaskList(context));

	context.state.taskList.map((task, index) => {
		expect(Task.default)
			.toHaveBeenCalledWith({ ...context, data: task });
		expect(getAllByRole('Task')[index]).toBeInTheDocument();
	});
});

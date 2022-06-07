import { React } from 'react';
import { render } from '@testing-library/react';
import TaskPane from './index';
import * as TaskList from './taskList';

test('TaskPane consists of several tasks', () => {
	const context = {
		actions: {},
		state: {
			taskList: [],
		},
	};

	jest.spyOn(TaskList, 'default')
		.mockReturnValue(<div role="TaskList"/>);

	const { getByRole } = render(TaskPane(context));

	expect(getByRole('TaskPane')).toBeInTheDocument();
	expect(getByRole('TaskPane')).toHaveTextContent('Tasks');
	expect(getByRole('TaskList')).toBeInTheDocument();
	expect(TaskList.default).toHaveBeenCalledWith(context);
});

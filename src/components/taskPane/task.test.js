import { React } from 'react';
import { random } from '@laufire/utils';
import { render } from '@testing-library/react';
import * as AddButton from './addButton';
import * as RemoveButton from './removeButton';
import Task from './task';

test('Task', () => {
	const sixteen = 16;
	const todo = random.rndString(sixteen);
	const context = {
		data: {
			id: '',
			todo: todo,
		},
	};

	jest.spyOn(AddButton, 'default')
		.mockReturnValue(<div role="addButton"/>);

	jest.spyOn(RemoveButton, 'default')
		.mockReturnValue(<div role="removeButton"/>);

	const { getByRole } = render(Task(context));

	expect(getByRole('Task')).toBeInTheDocument();
	expect(getByRole('Task')).toHaveTextContent(todo);

	expect(getByRole('addButton')).toBeInTheDocument();
	expect(AddButton.default).toHaveBeenCalledWith(context);

	expect(getByRole('removeButton')).toBeInTheDocument();
	expect(RemoveButton.default).toHaveBeenCalledWith(context);
});

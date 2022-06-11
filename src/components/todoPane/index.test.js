import { React } from 'react';
import TodoPane from './index';
import * as TodoListDisplay from './todoListDisplay';
import * as UserInputs from './userInputs';
import { render } from '@testing-library/react';
import context from '../../core/context';

test('TodoPane', () => {
	jest.spyOn(UserInputs, 'default')
		.mockReturnValue(<div role="userInputs"/>);

	jest.spyOn(TodoListDisplay, 'default')
		.mockReturnValue(<div role="todoListDisplay"/>);

	const { getByRole } = render(TodoPane(context));

	expect(getByRole('TodoPane')).toBeInTheDocument();

	expect(getByRole('userInputs')).toBeInTheDocument();
	expect(UserInputs.default).toHaveBeenCalledWith(context);

	expect(getByRole('todoListDisplay')).toBeInTheDocument();
	expect(TodoListDisplay.default).toHaveBeenCalledWith(context);
});

import removeButton from './removeButton.js';
import { render, fireEvent } from '@testing-library/react';

describe('RemoveButton', () => {
	const context = {
		actions: {
			removeTask: jest.fn(),
		},
		data: Symbol('data'),
	};
	const { actions, data } = context;

	test('idle RemoveButton', () => {
		const component = render(removeButton(context))
			.getByRole('removeButton');

		expect(component).toBeInTheDocument();
		expect(component).toHaveTextContent('X');
	});

	test('Clicking RemoveButton removes a task from the taskList', () => {
		const component = render(removeButton(context))
			.getByRole('removeButton');

		fireEvent.click(component);

		expect(actions.removeTask).toHaveBeenCalledWith(data);
	});
});

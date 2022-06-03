import todoCheckBox from './todoCheckBox';
import { fireEvent, render } from '@testing-library/react';

describe('TodoCheckBox', () => {
	const context = {
		data: { completed: false },
		actions: {
			toggleTodo: jest.fn(),
		},
	};
	const { data } = context;

	test('Displays todoCheckBox', () => {
		const component = render(todoCheckBox(context)).getByRole('toggleTodo');

		expect(component).toBeInTheDocument();
	});

	test('todoCheckBox - toggles the todo', () => {
		const component = render(todoCheckBox(context))
			.getByRole('toggleTodo');

		fireEvent.click(component);

		expect(context.actions.toggleTodo)
			.toHaveBeenCalledWith(data);
	});
});

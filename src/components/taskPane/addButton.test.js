import AddButton from './addButton';
import { render, fireEvent } from '@testing-library/react';

describe('AddButton', () => {
	const data = Symbol('data');
	const context = {
		actions: {
			addTaskToTodo: jest.fn(),
		},
		data: data,
	};

	test('idle AddButton', () => {
		const component = render(AddButton(context)).getByRole('addButton');

		expect(component).toBeInTheDocument();
		expect(component).toHaveTextContent('+');
	});

	test('Clicking AddButton adds a task to the todoList', () => {
		const component = render(AddButton(context)).getByRole('addButton');

		fireEvent.click(component);

		expect(context.actions.addTaskToTodo).toHaveBeenCalledWith(data);
	});
});

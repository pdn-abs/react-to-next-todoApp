import AddButton from './addButton';
import { render, fireEvent } from '@testing-library/react';

describe('AddButton', () => {
	const context = {
		actions: {
			addTodo: jest.fn(),
		},
	};

	test('idle AddButton', () => {
		const component = render(AddButton(context)).getByRole('addButton');

		expect(component).toBeInTheDocument();
	});

	test('Clicking AddButton creates a new todo in todos', () => {
		const component = render(AddButton(context)).getByRole('addButton');

		fireEvent.click(component);

		expect(context.actions.addTodo).toHaveBeenCalledWith();
	});
});

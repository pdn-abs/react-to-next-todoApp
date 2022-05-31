import input from './input';
import { random } from '@laufire/utils';
import { fireEvent, render } from '@testing-library/react';

describe('input', () => {
	const context = {
		state: {
			input: '',
		},
		actions: {
			setInput: jest.fn(),
			editTodo: jest.fn(),
			addTodo: jest.fn(),
		},
	};

	test('Displays inputBox', () => {
		const component = render(input(context)).getByRole('input');

		expect(component).toBeInTheDocument();
	});

	test('SetInput - sets the input', () => {
		const eight = 8;
		const value = random.rndString(eight);
		const component = render(input(context)).getByRole('input');

		fireEvent.change(component, { target: {
			value,
		}});

		expect(context.actions.setInput)
			.toHaveBeenCalledWith(value);
	});

	// eslint-disable-next-line max-len
	test('No actions should be performed when key is neither enter nor escape', () => {
		const code = random.rndString(1);
		const component = render(input(context)).getByRole('input');

		fireEvent.keyUp(component, { code });

		expect(context.actions.addTodo).not.toHaveBeenCalledWith(context);
		expect(context.actions.editTodo).not.toHaveBeenCalledWith(context);
		expect(context.actions.setInput).not.toHaveBeenCalledWith(context);
	});
});
describe('Action Keys', () => {
	test('Enter key - to edit the Todo', () => {
		const context = {
			state: {
				editing: true,
			},
			actions: {
				editTodo: jest.fn(),

			},
		};
		const code = 'Enter';
		const component = render(input(context)).getByRole('input');

		fireEvent.keyUp(component, { code });
		expect(context.actions.editTodo)
			.toHaveBeenCalledWith(context);
	});

	test('Enter key - to add the Todo', () => {
		const context = {
			state: {
				editing: false,
			},
			actions: {
				addTodo: jest.fn(),
			},
		};

		const code = 'Enter';
		const component = render(input(context)).getByRole('input');

		fireEvent.keyUp(component, { code });
		expect(context.actions.addTodo)
			.toHaveBeenCalledWith(context);
	});

	test('Escape key - to set the input to be an empty string', () => {
		const context = {
			state: {
				input: '',
			},
			actions: {
				setInput: jest.fn(),
			},
		};

		const code = 'Escape';
		const component = render(input(context)).getByRole('input');

		fireEvent.keyUp(component, { code });

		expect(context.actions.setInput)
			.toHaveBeenCalledWith('');
	});
});

import { render, fireEvent } from '@testing-library/react';
import filterButton from './filterButton';
import TodoManager from '../../../services/todoManager';
import { rndString } from '@laufire/utils/random';

describe('filterButton', () => {
	const label = rndString();
	const name = rndString();
	const context = {
		actions: {
			setFilter: jest.fn(),
		},
		data: {
			label, name,
		},
	};

	test('Displays FilterButton', () => {
		jest.spyOn(TodoManager, 'hasNoTodos')
			.mockReturnValue(false);

		const component = render(filterButton(context))
			.getByRole('filterButton');

		expect(component).toBeInTheDocument();
		expect(component).toHaveTextContent(label);
	});

	test('Clicking FilterButton will edits the todo ', () => {
		jest.spyOn(TodoManager, 'hasNoTodos')
			.mockReturnValue(false);

		const component = render(filterButton(context))
			.getByRole('filterButton');

		fireEvent.click(component);

		expect(context.actions.setFilter).toHaveBeenCalledWith(name);
	});

	test('FilterButton under disabled condition', () => {
		jest.spyOn(TodoManager, 'hasNoTodos')
			.mockReturnValue(true);

		const component = render(filterButton(context))
			.getByRole('filterButton');

		expect(component).toBeDisabled();
		expect(TodoManager.hasNoTodos)
			.toHaveBeenCalledWith(context);
	});

	test('FilterButton under enabled condition', () => {
		jest.spyOn(TodoManager, 'hasNoTodos')
			.mockReturnValue(false);

		const component = render(filterButton(context))
			.getByRole('filterButton');

		expect(component).not.toBeDisabled();
		expect(TodoManager.hasNoTodos)
			.toHaveBeenCalledWith(context);
	});
});

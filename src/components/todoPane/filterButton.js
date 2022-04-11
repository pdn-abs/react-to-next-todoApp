import { React } from 'react';
import TodoManager from '../../services/todoManager';

const FilterButton = (context) => {
	const { state, data } = context;
	const { label, name } = data;

	return (
		<button
			key={ name }
			disabled={ TodoManager.hasNoTodos(state.todoList) }
			onClick={ () => context.actions.setFilter(name) }
		>
			{label}
		</button>
	);
};

export default FilterButton;

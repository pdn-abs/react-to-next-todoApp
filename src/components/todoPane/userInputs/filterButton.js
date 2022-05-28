import { React } from 'react';
import TodoManager from '../../../services/todoManager';

const FilterButton = (context) => {
	const { data } = context;
	const { label, name } = data;

	return (
		<button
			key={ name }
			role="filterButton"
			disabled={ TodoManager.hasNoTodos(context) }
			onClick={ () => context.actions.setFilter(name) }
		>
			{label}
		</button>
	);
};

export default FilterButton;

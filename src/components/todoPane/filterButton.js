import { React } from 'react';
import context from '../../core/context';
import TodoManager from '../../services/todoManager';

const FilterButton = ({ name, label }) =>
	<button
		key={ name }
		disabled={ TodoManager.hasNoTodos(context.state.todoList) }
		onClick={ () =>
			context.actions.setFilter(name) }
	>{label}
	</button>;

export default FilterButton;

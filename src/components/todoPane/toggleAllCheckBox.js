import { React } from 'react';
import TodoManager from '../../services/todoManager';

const ToggleAllCheckBox = (context) => {
	const { state, actions } = context;
	const selectAll = TodoManager.isChecked(context);
	const noTodos = TodoManager.hasNoTodos(state.todoList);

	return (
		<input
			disabled={ noTodos }
			type="checkbox"
			checked={ selectAll }
			onChange={ () => actions.toggleTodoList(!selectAll) }
		/>
	);
};

export default ToggleAllCheckBox;

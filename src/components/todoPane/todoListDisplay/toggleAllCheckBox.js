import { React } from 'react';
import TodoManager from '../../../services/todoManager';

const ToggleAllCheckBox = (context) => {
	const { actions } = context;
	const selectAll = TodoManager.isAllChecked(context);
	const noTodos = TodoManager.hasNoTodos(context);

	return (
		<input
			role="toggleAllCheckBox"
			disabled={ noTodos }
			type="checkbox"
			checked={ selectAll }
			onChange={ () => actions.toggleTodoList(!selectAll) }
		/>
	);
};

export default ToggleAllCheckBox;

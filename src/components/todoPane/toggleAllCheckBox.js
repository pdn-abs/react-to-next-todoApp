/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable react/jsx-indent-props */
import { React } from 'react';
import TodoManager from '../../services/todoManager';

const ToggleAllCheckBox = (context) => {
	const { state } = context;
	const selectAll = TodoManager.isChecked(context);
	const noTodos = TodoManager.hasNoTodos(state.todoList);

	return noTodos
		? null
		: <input
			type="checkbox"
			checked={ selectAll }
			onChange={ () => context.actions.toggleTodoList(!selectAll) }
		  /> ;
};

export default ToggleAllCheckBox;

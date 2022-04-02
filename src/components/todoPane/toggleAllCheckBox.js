import { React } from 'react';
import todoManager from '../../services/todoManager';

const ToggleAllCheckBox = (context) => {
	const selectAll = todoManager.isChecked(context);

	return (
		<input
			type="checkbox"
			checked={ selectAll }
			onChange={ () => context.actions.toggleTodoList(!selectAll) }
		/>);
};

export default ToggleAllCheckBox;

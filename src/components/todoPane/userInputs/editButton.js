import { React } from 'react';
import TodoManager from '../../../services/todoManager';

const editButton = (context) =>
	<button
		role="editButton"
		disabled={ TodoManager.hasInput(context) }
		onClick={ () => context.actions.editTodo() }
	>
		EDIT</button>;

export default editButton;

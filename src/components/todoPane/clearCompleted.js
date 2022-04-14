import { React } from 'react';
import TodoManager from '../../services/todoManager';

const clearCompleted = (context) =>
	<button
		role="clearCompleted"
		disabled={ TodoManager.isChecked(context) }
		onClick={ () =>	context.actions.getClearCompleted(context.state) }
	>Clear Completed
	</button>;

export default clearCompleted;

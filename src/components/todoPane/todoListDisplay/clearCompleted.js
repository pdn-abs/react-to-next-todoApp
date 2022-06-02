import { React } from 'react';
import TodoManager from '../../../services/todoManager';

const clearCompleted = (context) => {
	const hasCompletedTodo = TodoManager.hasCompletedTodo(context);

	return (
		<button
			role="clearCompleted"
			disabled={ !hasCompletedTodo }
			onClick={ () =>	context.actions.getClearCompleted() }
		>Clear Completed
		</button>
	);
};

export default clearCompleted;

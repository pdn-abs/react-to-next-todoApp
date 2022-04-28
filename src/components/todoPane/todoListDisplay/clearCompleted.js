import { React } from 'react';
import TodoManager from '../../../services/todoManager';

const clearCompleted = (context) => {
	const noTodos = TodoManager.hasNoTodos(context);
	const hasCompletedTodo = TodoManager.hasCompletedTodo(context);

	return (
		<button
			role="clearCompleted"
			disabled={ !hasCompletedTodo || noTodos }
			onClick={ () =>	context.actions.getClearCompleted() }
		>Clear Completed
		</button>
	);
};

export default clearCompleted;

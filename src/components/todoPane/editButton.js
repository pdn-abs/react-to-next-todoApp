import { React } from 'react';

const editButton = (context) =>
	<button
		disabled={ context.state.input === '' }
		onClick={ () => context.actions.editTodo(context.state) }
	>
		EDIT</button>;

export default editButton;

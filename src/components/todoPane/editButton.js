import { React } from 'react';

const editButton = (context) =>
	<button
		disabled={ context.state.input === '' }
		onClick={ () => context.actions.editTodo() }
	>
		EDIT</button>;

export default editButton;

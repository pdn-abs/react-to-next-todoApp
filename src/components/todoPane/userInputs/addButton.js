import { React } from 'react';

const AddButton = (context) =>
	<button
		role="addButton"
		onClick={ () => context.actions.addTodo() }
	>
		Add
	</button>;

export default AddButton;

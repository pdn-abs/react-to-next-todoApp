import { React } from 'react';

const AddButton = (context) =>
	<button onClick={ () => context.actions.addTodo() }>
		Add
	</button>;

export default AddButton;

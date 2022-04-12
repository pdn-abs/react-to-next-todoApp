import { React } from 'react';

const editButton = (context) =>
	<button
		disabled={ context.state.input === '' }
	>
		EDIT</button>;

export default editButton;

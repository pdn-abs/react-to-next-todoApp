import { React } from 'react';

const editButton = (context) =>
	<button
		disabled={ context.state.input === '' }
	>
		edit</button>;

export default editButton;

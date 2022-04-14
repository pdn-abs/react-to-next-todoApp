import { React } from 'react';

const RemoveButton = (context) => {
	const { actions, data } = context;

	return (
		<button
			role="removeButton"
			onClick={ () => actions.removeTodo(data) }
		>X</button>
	);
};

export default RemoveButton;

import { React } from 'react';

const CheckBox = (context) => {
	const { data } = context;
	const { completed } = data;

	return (
		<input
			role="toggleTodo"
			type="checkbox"
			checked={ completed }
			onChange={ () => context.actions.toggleTodo(data) }
		/>);
};

export default CheckBox;

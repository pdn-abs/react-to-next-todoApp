import { React } from 'react';

const CheckBox = (context) => {
	const { state } = context;

	return (
		<input
			type="checkbox"
			checked={ state.completed }
			onClick={ (evt) =>
				context.actions.setTodoStatus(evt.target.value) }
		/>);
};

export default CheckBox;

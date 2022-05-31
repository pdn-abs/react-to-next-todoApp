import { React } from 'react';

const getEnterKeyAction = (context) =>
	(context.state.editing ? 'editTodo' : 'addTodo');

const actionKeys = {
	Enter: (context) => context.actions[getEnterKeyAction(context)](context),
	Escape: (context) => context.actions.setInput(''),
};
const Input = (context) => {
	const { state } = context;

	return (
		<label>Enter the Task:{}
			<input
				id="input"
				role="input"
				type="text"
				value={ state.input }
				onChange={ (evt) =>
					context.actions.setInput(evt.target.value) }
				onKeyUp={ (evt) => {
					actionKeys[evt.code] && actionKeys[evt.code](context);
				} }
			/>
		</label>);
};

export default Input;

import { React } from 'react';

const Input = (context) => {
	const { state } = context;

	return (
		<label>Enter the Task:{}
			<input
				id="input"
				type="text"
				value={ state.input }
				onChange={ (evt) =>
					context.actions.setInput(evt.target.value) }
			/>
		</label>);
};

export default Input;

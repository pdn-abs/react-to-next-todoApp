import { React } from 'react';
import CheckBox from './checkBox';

const Todo = (context) => {
	const { data } = context;
	const { id, todo } = data;

	return (
		<div key={ id } className="todo">
			<span>{CheckBox(context)}</span>
			<span>{todo}</span>
		</div>

	);
};

export default Todo;

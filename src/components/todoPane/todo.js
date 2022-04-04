import { React } from 'react';
import TodoCheckBox from './todoCheckBox';

const Todo = (context) => {
	const { data } = context;
	const { id, todo } = data;

	return (
		<div key={ id } className="todo">
			<span>{TodoCheckBox(context)}</span>
			<span>{todo}</span>
		</div>

	);
};

export default Todo;

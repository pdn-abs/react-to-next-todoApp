import { React } from 'react';
import AddButton from './addButton';

const Task = (context) => {
	const { data: { id, todo }} = context;

	return	<div	key={ id }	role="Task">
		<span>{AddButton(context)}</span>
		<span>{ todo }</span>
	</div>;
};

export default Task;

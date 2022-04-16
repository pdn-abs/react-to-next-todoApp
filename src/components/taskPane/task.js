import { React } from 'react';

const Task = (context) => {
	const { data: { id, todo }} = context;

	return	<div	key={ id }	role="Task">
		<span>{ todo }</span>
	</div>;
};

export default Task;

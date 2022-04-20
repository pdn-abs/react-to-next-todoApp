import { React } from 'react';
import AddButton from './addButton';
import RemoveButton from './removeButton';

const Task = (context) => {
	const { data: { id, todo }} = context;

	return	<div	key={ id }	role="Task">
		<span>{AddButton(context)}</span>
		<span>{ todo }</span>
		<span>{RemoveButton(context)}</span>
	</div>;
};

export default Task;

import { React } from 'react';
import AddButton from './addButton';
import RemoveButton from './removeButton';

const Task = (context) => {
	const { data: { id, todo }} = context;

	return	<div	key={ id }	role="Task">
		<span>{ todo }</span>
		<span className="input">{AddButton(context)}</span>
		<span className="input">{RemoveButton(context)}</span>
	</div>;
};

export default Task;

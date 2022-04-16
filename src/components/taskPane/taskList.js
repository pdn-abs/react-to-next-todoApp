import { React } from 'react';
import Task from './task.js';

const TaskList = (context) => {
	const { state: { taskList }} = context;

	return (

		<div role="TaskList">
			{ taskList.map((task) => Task({ ...context, data: task })) } </div>
	);
};

export default TaskList;

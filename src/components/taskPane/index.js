import { React } from 'react';
import TaskList from './taskList';

const TaskPane = (context) =>
	<div className="taskPane" role="TaskPane">
		<h4>Tasks</h4>
		<span>{TaskList(context)}</span>
	</div>;

export default TaskPane;

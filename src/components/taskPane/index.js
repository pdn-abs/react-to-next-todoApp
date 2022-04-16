import { React } from 'react';
import '../../App.scss';
import TaskList from './taskList';

const TaskPane = (context) =>
	<div className="taskPane">
		<h3>Task</h3>
		<div>{TaskList(context)}</div>
	</div>;

export default TaskPane;

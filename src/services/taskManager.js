import { rndString } from '@laufire/utils/random';

const TaskManager = {
	getTask: (context) => {
		const { config, data: text } = context;

		return { id: rndString(config.idLength),
			todo: text };
	},

	init: (context) =>
		context.actions.setTasks(context.config.tasks.map((task) =>
			TaskManager.getTask({ ...context, data: task })),),

	removeTask: (context) => {
		const { state, data } = context;

		return state.taskList.filter((task) => task.id !== data.id);
	},

	AddTask: (context) => {
		const { config } = context;
		const tasks = context.state.taskList;
		const tasksLength = tasks.length;
		const maxListLength = config.maxTaskListLength;

		return tasksLength <= maxListLength
			? context.state.taskList.concat(TaskManager.getTask(context))
			: tasks;
	},
};

export default TaskManager;

import { rndString } from '@laufire/utils/random';

const TaskManager = {
	getTask: ({ config, data: text }) => ({
		id: rndString(config.idLength),
		todo: text,
	}),

	init: (context) =>
		context.actions.setTasks(context.config.tasks.map((task) =>
			TaskManager.getTask({ ...context, data: task })),),

	removeTask: (taskList, data) =>
		taskList.filter((task) => task.id !== data.id),

	AddTask: (context) => {
		const tasks = context.state.taskList;
		const tasksLength = tasks.length;
		const maxListLength = 15;

		return tasksLength <= maxListLength
			? context.state.taskList.concat(TaskManager.getTask(context))
			: tasks;
	},
};

export default TaskManager;

import { rndString } from '@laufire/utils/random';

const TaskManager = {
	getTask: ({ config, data: text }) => ({
		id: rndString(config.idLength),
		todo: text,
	}),
	getConfigTasks: (context) =>
		context.config.tasks.map((task) =>
			TaskManager.getTask({ ...context, data: task })),

	init: (context) =>
		context.actions.setTasks(TaskManager.getConfigTasks(context)),

	removeTask: ({ state, data }) =>
		state.taskList.filter((task) => task.id !== data.id),

	addTask: (context) => {
		const { config: { maxTaskListLength }, state: { taskList }} = context;

		return taskList.length <= maxTaskListLength
			? taskList.concat(TaskManager.getTask(context))
			: taskList;
	},
};

export default TaskManager;

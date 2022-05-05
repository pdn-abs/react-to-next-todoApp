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

	addTask: (context) => {
		const { config: { maxTaskListLength }, state: { taskList }} = context;

		return taskList.length <= maxTaskListLength
			? context.state.taskList.concat(TaskManager.getTask(context))
			: taskList;
	},
};

export default TaskManager;

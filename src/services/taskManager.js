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

	AddTask: (context) =>
		context.state.taskList.concat(TaskManager.getTask(context)),

};

export default TaskManager;

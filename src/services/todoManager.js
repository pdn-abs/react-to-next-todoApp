import { rndString } from '@laufire/utils/random';

const todoManager = {
	addTodo: (context) => {
		const { config, state } = context;

		return [
			...state.todoList,
			{
				id: rndString(config.idLength),
				todo: state.input,
			},
		];
	},
};

export default todoManager;

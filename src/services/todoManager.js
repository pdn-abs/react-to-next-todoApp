import { rndString } from '@laufire/utils/random';

const todoManager = {
	addTodo: (context) => {
		const { config, state } = context;

		return [
			...state.todoList,
			{
				id: rndString(config.idLength),
				todo: state.input,
				completed: false,
			},
		];
	},
	toggleTodo: (context) => {
		const { data, state } = context;

		return (
			state.todoList.map((todo) => (todo.id !== data.id
				? todo
				: {
					...todo,
					completed: !data.completed,
				}
			))
		);
	},
};

export default todoManager;

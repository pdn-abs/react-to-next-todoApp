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
	toggleTodoList: (context) => {
		const { state, data } = context;

		return (
			state.todoList.map((todo) => (
				{
					...todo,
					completed: data,
				}
			))
		);
	},
	isChecked: (context) => {
		const { state } = context;
		const unCheckedList = state.todoList.filter((todo) =>
			todo.completed === false);

		return unCheckedList.length === 0 && state.todoList.length !== 0;
	},
};

export default todoManager;

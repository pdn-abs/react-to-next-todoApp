import { rndString } from '@laufire/utils/random';
const TodoManager = {
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
			!todo.completed);

		return unCheckedList.length === 0;
	},
	filters: {
		all: () => true,
		active: (todo) => !todo.completed,
		completed: (todo) => todo.completed,
	},
	hasNoTodos: (todos) => {
		const todosLength = todos !== undefined
			? todos.length
			: 0;

		return todosLength === 0;
	},
	filterTodos: (todos, filter) => (TodoManager.hasNoTodos(todos)
		? []
		: todos.filter(TodoManager.filters[filter])),

	editTodo: (
		todos, editing, text
	) =>
		todos.map((todo) =>
			(todo.id !== editing.id
				? todo
				: {
					...todo,
					todo: text,
				})),

	removeTodo: (context) => {
		const { state, data } = context;
		const todos = state.todoList.filter((todo) => todo.id !== data.id);

		return todos;
	},

	clearCompleted: (todos) =>
		todos.filter((todo) => !todo.completed),

	addTaskToTodo: (context) => {
		const { state, data } = context;

		return [
			...state.todoList,
			{
				id: data.id,
				todo: data.todo,
				completed: false,
			},
		];
	},
};

export default TodoManager;

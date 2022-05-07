import { rndString } from '@laufire/utils/random';
const TodoManager = {
	addTodo: ({ config, state }) =>
		[
			...state.todoList,
			{
				id: rndString(config.idLength),
				todo: state.input,
				completed: false,
			},
		],

	toggleTodo: ({ data, state: { todoList }}) =>
		todoList.map((todo) => (todo.id !== data.id
			? todo
			: {
				...todo,
				completed: !data.completed,
			})),

	toggleTodoList: ({ data, state: { todoList }}) =>
		todoList.map((todo) => (
			{
				...todo,
				completed: data,
			})),

	hasNoTodos: ({ state: { todoList }}) => todoList.length === 0,

	isAllChecked: ({ state: { todoList }}) =>
		todoList.filter((todo) => !todo.completed).length === 0,

	hasCompletedTodo: ({ state: { todoList }}) =>
		todoList.filter((todo) => todo.completed).length > 0,

	filters: {
		all: () => true,
		active: (todo) => !todo.completed,
		completed: (todo) => todo.completed,
	},
	filterTodos: ({ state: { todoList, filter }}) =>
		todoList.filter(TodoManager.filters[filter]),

	editTodo: ({ state: { todoList, editing, input }}) =>
		todoList.map((todo) =>
			(todo.id !== editing.id
				? todo
				: {
					...todo,
					todo: input,
				})),

	removeTodo: ({ data, state: { todoList }}) =>
		todoList.filter((todo) => todo.id !== data.id),

	clearCompleted: ({ state: { todoList }}) =>
		todoList.filter((todo) => !todo.completed),

	addTaskToTodo: ({ data, state: { todoList }}) => [
		...todoList,
		{
			id: data.id,
			todo: data.todo,
			completed: false,
		},
	],

};

export default TodoManager;

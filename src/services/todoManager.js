import { rndString } from '@laufire/utils/random';

const addTodo = (context) => {
	const { config, state } = context;

	return [
		...state.todoList,
		{
			id: rndString(config.idLength),
			todo: state.input,
			completed: false,
		},
	];
};

const toggleTodo = (context) => {
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
};
const toggleTodoList = (context) => {
	const { state, data } = context;

	return (
		state.todoList.map((todo) => (
			{
				...todo,
				completed: data,
			}
		))
	);
};
const isChecked = (context) => {
	const { state } = context;
	const unCheckedList = state.todoList.filter((todo) =>
		!todo.completed);

	return unCheckedList.length === 0;
};
const filters = {
	all: () => true,
	active: (todo) => !todo.completed,
	completed: (todo) => todo.completed,
};
const hasNoTodos = (todos) => {
	const todosLength = todos !== undefined
		? todos.length
		: 0;

	return todosLength === 0;
};
const filterTodos = (todos, filter) => (hasNoTodos(todos)
	? []
	: todos.filter(filters[filter]));

const editTodo = (
	todos, editing, text
) =>
	todos.map((todo) =>
		(todo.id !== editing.id
			? todo
			: {
				...todo,
				todo: text,
			}));

const removeTodo = (context) => {
	const { state, data } = context;
	const todos = state.todoList.filter((todo) => todo.id !== data.id);

	return todos;
};
const TodoManager = {
	addTodo,
	toggleTodo,
	toggleTodoList,
	isChecked,
	filterTodos,
	hasNoTodos,
	filters,
	editTodo,
	removeTodo,
};

export default TodoManager;

import { rndString } from '@laufire/utils/random';
const TodoManager = {
	addTodo: (context) => {
		const { config, state } = context;
		const { todoList } = state;

		return [
			...todoList,
			{
				id: rndString(config.idLength),
				todo: state.input,
				completed: false,
			},
		];
	},

	toggleTodo: (context) => {
		const { data } = context;
		const { todoList } = context.state;

		return (
			todoList.map((todo) => (todo.id !== data.id
				? todo
				: {
					...todo,
					completed: !data.completed,
				}
			))
		);
	},
	toggleTodoList: (context) => {
		const { data } = context;
		const { todoList } = context.state;

		return (
			todoList.map((todo) => (
				{
					...todo,
					completed: data,
				}
			))
		);
	},
	isAllChecked: (context) => {
		const { todoList } = context.state;
		const unCheckedList = todoList.filter((todo) =>
			!todo.completed);
		const noTodos = TodoManager.hasNoTodos(todoList);

		return unCheckedList.length === 0 && !noTodos;
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

	editTodo: (context) => {
		const { todoList, editing, input } = context.state;

		return todoList.map((todo) =>
			(todo.id !== editing.id
				? todo
				: {
					...todo,
					todo: input,
				}));
	},
	removeTodo: (context) => {
		const { data } = context;
		const { todoList } = context.state;

		return todoList.filter((todo) => todo.id !== data.id);
	},

	clearCompleted: (context) => {
		const { todoList } = context.state;

		return todoList.filter((todo) => !todo.completed);
	},
	addTaskToTodo: (context) => {
		const { data } = context;
		const { todoList } = context.state;

		return [
			...todoList,
			{
				id: data.id,
				todo: data.todo,
				completed: false,
			},
		];
	},
};

export default TodoManager;

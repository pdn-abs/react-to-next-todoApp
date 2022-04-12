import TodoManager from '../services/todoManager';

const setInput = ({ data: input }) => ({
	input,
});
const addTodo = (context) => ({
	input: '',
	todoList: TodoManager.addTodo(context),
});
const toggleTodo = (context) => ({
	todoList: TodoManager.toggleTodo(context),
});
const toggleTodoList = (context) => ({
	todoList: TodoManager.toggleTodoList(context),
});
const setFilter = ({ data: filter }) => ({
	filter,
});
const setEditing = ({ data }) => ({
	editing: data,
	input: data.todo,
});
const editTodo = ({ state }) => ({
	todoList: TodoManager.editTodo(
		state.todoList, state.editing, state.input
	),
	input: '',
	editing: null,
});

const actions = {
	setInput,
	addTodo,
	toggleTodo,
	toggleTodoList,
	setFilter,
	setEditing,
	editTodo,
};

export default actions;

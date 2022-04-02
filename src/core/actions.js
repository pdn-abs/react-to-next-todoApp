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
const actions = {
	setInput,
	addTodo,
	toggleTodo,
	toggleTodoList,
};

export default actions;

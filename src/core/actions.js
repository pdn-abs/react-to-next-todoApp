import TodoManager from '../services/todoManager';
import TaskManager from '../services/taskManager';
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
const editTodo = (context) => ({
	todoList: TodoManager.editTodo(context),
	input: '',
	editing: null,
});

const removeTodo = (context) => ({
	todoList: TodoManager.removeTodo(context),
});
const getClearCompleted = (context) => ({
	todoList: TodoManager.clearCompleted(context),
});
const setTasks = (context) => ({
	taskList: context.data,
});
const addTasks = (context) => ({
	taskList: TaskManager.addTask(context),
});
const addTaskToTodo = (context) => ({
	todoList: TodoManager.addTaskToTodo(context),
});
const removeTask = (context) => ({
	taskList: TaskManager.removeTask(context),
});
const actions = {
	setInput,
	addTodo,
	toggleTodo,
	toggleTodoList,
	setFilter,
	setEditing,
	editTodo,
	removeTodo,
	getClearCompleted,
	setTasks,
	addTasks,
	addTaskToTodo,
	removeTask,
};

export default actions;

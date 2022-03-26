import TodoManager from '../services/todoManager';

const setInput = ({ data: input }) => ({
	input,
});
const addTodo = (context) => ({
	todoList: TodoManager.addTodo(context),
});
const actions = {
	setInput,
	addTodo,
};

export default actions;

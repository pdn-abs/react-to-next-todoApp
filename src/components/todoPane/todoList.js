import todos from './todos';

const TodoList = (context) =>
	context.state.todoList.map(todos);

export default TodoList;

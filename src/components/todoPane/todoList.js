import Todo from './todo';

const TodoList = (context) =>
	context.state.todoList.map((todo) => Todo({ ...context, data: todo }));

export default TodoList;

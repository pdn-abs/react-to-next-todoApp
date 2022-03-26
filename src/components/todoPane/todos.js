import { React } from 'react';

const Todos = (todoList) => {
	const { id, todo } = todoList;

	return (
		<div key={ id }>
			<div className="todo"> &gt; {todo}</div>
		</div>
	);
};

export default Todos;

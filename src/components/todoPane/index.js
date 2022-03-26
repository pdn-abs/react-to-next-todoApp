import { React } from 'react';
import '../../App.scss';
import Input from './input';
import AddButton from './addButton.js';
import TodoList from './todoList.js';

const TodoPane = (context) =>
	<div className="todoPane" role="TodoPane">
		<div>
			<div className="input">{Input(context)}
				{AddButton(context)}</div>

		</div>
		<div className="todoList"><u>Todo List</u></div>
		<div className="todoList">{TodoList(context)}
		</div>
	</div>;

export default TodoPane;

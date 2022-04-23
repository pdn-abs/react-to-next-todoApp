import { React } from 'react';
import TodoList from './todoList.js';
import ToggleAllCheckBox from './toggleAllCheckBox.js';
import ClearCompleted from './clearCompleted';

const TodoListDisplay = (context) =>
	<div className="todoList" role="TodoListDisplay">
		<span>{ToggleAllCheckBox(context)}</span>
		<u>Todo List</u>
		<div>
			{TodoList(context)}
		</div>
		<div>
			{ClearCompleted(context)}
		</div>
	</div>;

export default TodoListDisplay;

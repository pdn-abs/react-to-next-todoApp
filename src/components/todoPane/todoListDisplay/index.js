import { React } from 'react';
import TodoList from './todoList.js';
import ToggleAllCheckBox from './toggleAllCheckBox.js';
import ClearCompleted from './clearCompleted';

const TodoListDisplay = (context) =>
	<div className="todoList" role="TodoListDisplay">
		<div>{ToggleAllCheckBox(context)}<u>Todo List</u>
		</div>
		<div>
			{TodoList(context)}
		</div>
		<div>
			{ClearCompleted(context)}
		</div>
	</div>;

export default TodoListDisplay;

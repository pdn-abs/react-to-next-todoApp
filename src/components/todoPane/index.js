import { React } from 'react';
import Input from './input';
import TodoList from './todoList.js';
import ToggleAllCheckBox from './toggleAllCheckBox.js';
import FilterBar from './filterBar.js';
import ActionButton from './actionButton';
import ClearCompleted from './clearCompleted';

const TodoPane = (context) =>
	<div className="todoPane" role="TodoPane">
		<div className="input">
			{Input(context)}
			{ActionButton(context)}
		</div>
		<div className="todoList">
			{FilterBar(context)}
		</div>
		<div className="todoList">
			<span>{ToggleAllCheckBox(context)}</span>
			<u>Todo List</u>
		</div>
		<div className="todoList">
			{TodoList(context)}
		</div>
		<div className="todoList">
			{ClearCompleted(context)}
		</div>
	</div>;

export default TodoPane;

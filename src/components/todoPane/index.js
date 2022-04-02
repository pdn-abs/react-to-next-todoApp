import { React } from 'react';
import '../../App.scss';
import Input from './input';
import AddButton from './addButton.js';
import TodoList from './todoList.js';
import ToggleAllCheckBox from './toggleAllCheckBox.js';

const TodoPane = (context) =>
	<div className="todoPane" role="TodoPane">
		<div className="input">
			{Input(context)}
			{AddButton(context)}
		</div>
		<div className="todoList">
			<span>{ToggleAllCheckBox(context)}</span>
			<u>Todo List</u></div>
		<div className="todoList">
			{TodoList(context)}
		</div>
	</div>;

export default TodoPane;

import { React } from 'react';
import TodoListDisplay from './todoListDisplay';
import UserInputs from './userInputs';

const TodoPane = (context) =>
	<div className="todoPane" role="TodoPane">
		<span>{UserInputs(context)}</span>
		<span>{TodoListDisplay(context)}</span>
	</div>;

export default TodoPane;

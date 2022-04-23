import { React } from 'react';
import Input from './input';
import FilterBar from './filterBar.js';
import ActionButton from './actionButton';

const UserInputs = (context) =>
	<div className="userInputs" role="userInputs">
		<div className="input">
			{Input(context)}
			{ActionButton(context)}
		</div>
		<div><br/>
			{FilterBar(context)}
		</div>
		<br/>
	</div>;

export default UserInputs;

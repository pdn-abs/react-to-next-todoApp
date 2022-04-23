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
		<div className="filter">
			{FilterBar(context)}
		</div>
	</div>;

export default UserInputs;

/* eslint-disable no-console */
import { React, useEffect } from 'react';
import './App.scss';
import TaskPane from './components/taskPane';
import TodoPane from './components/todoPane';
import TaskManager from './services/taskManager.js';
import Ticker from './services/ticker';

const App = (context) => {
	console.log(context);
	useEffect(() => TaskManager.init(context), []);
	useEffect(() => Ticker.start(context), []);
	return <div className="App" role="App">
		<div className="mainDiv">
			<div className="leftDiv"><b>TodoPane</b>{TodoPane(context)}</div>
			<div className="rightDiv"><b>TaskPane</b>{TaskPane(context)}</div>
		</div>
	</div>;
};

export default App;

import { React, useEffect } from 'react';
import './App.scss';
import TaskPane from './components/taskPane';
import TodoPane from './components/todoPane';
import TaskManager from './services/taskManager.js';

const App = (context) => {
	useEffect(() => TaskManager.init(context), []);

	return <div className="App" role="App">
		<div className="mainDiv">
			<div className="leftDiv"><b>TodoPane</b>{TodoPane(context)}</div>
			<div className="rightDiv"><b>TaskPane</b>{TaskPane(context)}</div>
		</div>
	</div>;
};

export default App;

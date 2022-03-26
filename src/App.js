import { React } from 'react';
import './App.scss';
import TodoPane from './components/todoPane';

const App = (context) => <div className="App" role="App">
	<div className="mainDiv">
		<div className="leftDiv"><b>TodoPane</b>{TodoPane(context)}</div>
		<div className="rightDiv">TaskPane{}</div>
	</div>
</div>;

export default App;

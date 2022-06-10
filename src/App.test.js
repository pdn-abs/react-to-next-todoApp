/* eslint-disable react/display-name */
import { render } from '@testing-library/react';
import React from 'react';

jest.mock('./components/todoPane', () => () => <div role="todoPane"/>);
jest.mock('./components/taskPane', () => () => <div role="taskPane"/>);

import App from './App';
import TaskManager from './services/taskManager';
import Ticker from './services/ticker';

test('renders learn react link', () => {
	jest.spyOn(React, 'useEffect');
	jest.spyOn(Ticker, 'start').mockReturnValue();
	jest.spyOn(TaskManager, 'init').mockReturnValue();

	const { getByRole } = render(<App/>);

	expect(getByRole('todoPane')).toBeInTheDocument();
	expect(getByRole('taskPane')).toBeInTheDocument();
});

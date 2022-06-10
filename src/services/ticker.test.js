import * as random from '@laufire/utils/random';
import Ticker from './ticker';

test('Ticker.start ', () => {
	const fn = Symbol('fn');
	const tasks = { map: jest.fn() };
	const TickerDelay = Symbol('TickerDelay');
	const context = {
		fn: fn,
		actions: { addTasks: jest.fn() },
		config: { tasks, TickerDelay },
	};
	const setIntervalMock = (Fn) => Fn();
	const { actions } = context;

	jest.spyOn(global, 'setInterval').mockImplementation(setIntervalMock);
	jest.spyOn(random, 'rndValue').mockReturnValue();
	Ticker.start(context);

	expect(global.setInterval)
		.toHaveBeenCalledWith(expect.any(Function), TickerDelay);
	const randomTask = expect(random.rndValue).toHaveBeenCalledWith(tasks);

	expect(actions.addTasks)
		.toHaveBeenCalledWith(randomTask);
});

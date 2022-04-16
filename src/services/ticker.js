import { rndValue } from '@laufire/utils/random';

const Ticker = {
	start: (context) => {
		const { actions, config } = context;
		const { tasks } = config;

		return setInterval(() =>
			actions.addTasks(rndValue(tasks)), config.TickerDelay);
	},
};

export default Ticker;

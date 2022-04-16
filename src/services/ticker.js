import { rndValue } from '@laufire/utils/random';

const Ticker = {
	start: (context) => {
		const { actions, config } = context;
		const { taskList } = config;

		return setInterval(() =>
			actions.addTasks(rndValue(taskList)), config.TickerDelay);
	},
};

export default Ticker;

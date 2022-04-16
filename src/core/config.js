const milliseconds = 1000;
const seconds = 2;

const config = {
	idLength: 4,
	filters: [{ label: 'ALL',
		name: 'all' },
	{ label: 'ACTIVE',
		name: 'active' },
	{ label: 'COMPLETED',
		name: 'completed' }],
	TickerDelay: milliseconds * seconds,
	tasks: ['Debug the code', 'Test the code', 'Submit the code'],
};

export default config;

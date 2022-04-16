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
	tasks: [{ todo: 'Debug the code',
		completed: 'false' },
	{ todo: 'Test the code',
		completed: 'false' },
	{ todo: 'Submit the code',
		completed: 'false' }],
};

export default config;

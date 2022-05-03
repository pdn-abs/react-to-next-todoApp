import actions from './actions';

describe('actions', () => {
	const { setInput } = actions;

	test('SetInput- sets the given input', () => {
		const data = Symbol('input') ;
		const result = setInput({ data });

		expect(result).toEqual({ input: data });
	});
});

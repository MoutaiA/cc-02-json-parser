const { parse } = require('./index');

const MOCKED_FILES = require('./data');

test('Should return code 0 for a valid file', () => {
	const result = parse(MOCKED_FILES.STEP_1.VALID);

	expect(result).toBe(0);
});

test('Should return code 1 for an invalid file', () => {
	const result = parse(MOCKED_FILES.STEP_1.INVALID);

	expect(result).toBe(1);
});

const { parse } = require('./index');

const MOCKED_FILES = require('./data');

describe('STEP 1', () => {
	test('[1] Should return code 0 for a valid file', () => {
		const result = parse(MOCKED_FILES.STEP_1.VALID.first);

		expect(result).toBe(0);
	});

	test('[2] Should return code 0 for a valid file', () => {
		const result = parse(MOCKED_FILES.STEP_1.VALID.second);

		expect(result).toBe(0);
	});

	test('[3] Should return code 0 for a valid file', () => {
		const result = parse(MOCKED_FILES.STEP_1.VALID.third);

		expect(result).toBe(0);
	});

	test('[1] Should return code 1 for an invalid file', () => {
		const result = parse(MOCKED_FILES.STEP_1.INVALID.first);

		expect(result).toBe(1);
	});

	test('[2] Should return code 1 for an invalid file', () => {
		const result = parse(MOCKED_FILES.STEP_1.INVALID.first);

		expect(result).toBe(1);
	});
});

describe('STEP 2', () => {
	test('[1] Should return code 0 for a valid json', () => {
		const result = parse(MOCKED_FILES.STEP_2.VALID.first);

		expect(result).toBe(0);
	});

	test('[2] Should return code 0 for a valid json', () => {
		const result = parse(MOCKED_FILES.STEP_2.VALID.second);

		expect(result).toBe(0);
	});

	test('[1] Should return code 1 for an invalid json', () => {
		const result = parse(MOCKED_FILES.STEP_2.INVALID.first);

		expect(result).toBe(1);
	});

	test('[2] Should return code 1 for an invalid json', () => {
		const result = parse(MOCKED_FILES.STEP_2.INVALID.second);

		expect(result).toBe(1);
	});
});

describe('STEP 3', () => {
	test('[1] Should return code 0 for a valid json', () => {
		const result = parse(MOCKED_FILES.STEP_3.VALID.first);

		expect(result).toBe(0);
	});

	test('[1] Shoudl return code 1 for an invalid json', () => {
		const result = parse(MOCKED_FILES.STEP_3.INVALID.first);

		expect(result).toBe(1);
	});
});

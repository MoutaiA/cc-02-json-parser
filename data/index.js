const { readFileSync } = require('fs');

const step_1_valid_1 = readFileSync(__dirname + '/step_1/valid.json', 'utf8');
const step_1_valid_2 = readFileSync(__dirname + '/step_1/valid2.json', 'utf8');
const step_1_valid_3 = readFileSync(__dirname + '/step_1/valid3.json', 'utf8');
const step_1_invalid_1 = readFileSync(__dirname + '/step_1/invalid.json', 'utf8');
const step_1_invalid_2 = readFileSync(__dirname + '/step_1/invalid2.json', 'utf8');

const step_2_valid_1 = readFileSync(__dirname + '/step_2/valid.json', 'utf8');
const step_2_valid_2 = readFileSync(__dirname + '/step_2/valid2.json', 'utf8');
const step_2_invalid_1 = readFileSync(__dirname + '/step_2/invalid.json', 'utf8');
const step_2_invalid_2 = readFileSync(__dirname + '/step_2/invalid2.json', 'utf8');

const step_3_valid = readFileSync(__dirname + '/step_3/valid.json', 'utf8');
const step_3_invalid = readFileSync(__dirname + '/step_3/invalid.json', 'utf8');

const step_4_valid_1 = readFileSync(__dirname + '/step_4/valid.json', 'utf8');
const step_4_valid_2 = readFileSync(__dirname + '/step_4/valid2.json', 'utf8');
const step_4_invalid_1 = readFileSync(__dirname + '/step_4/invalid.json', 'utf8');
const step_4_invalid_2 = readFileSync(__dirname + '/step_4/invalid2.json', 'utf8');

module.exports = {
	STEP_1: {
		VALID: {
			first: step_1_valid_1,
			second: step_1_valid_2,
			third: step_1_valid_3,
		},
		INVALID: {
			first: step_1_invalid_1,
			second: step_1_invalid_2,
		},
	},
	STEP_2: {
		VALID: {
			first: step_2_valid_1,
			second: step_2_valid_2,
		},
		INVALID: {
			first: step_2_invalid_1,
			second: step_2_invalid_2,
		},
	},
	STEP_3: {
		VALID: {
			first: step_3_valid,
		},
		INVALID: {
			first: step_3_invalid,
		},
	},
	STEP_4: {
		VALID: {
			first: step_4_valid_1,
			second: step_4_valid_2,
		},
		INVALID: {
			first: step_4_invalid_1,
			second: step_4_invalid_2,
		},
	},
};

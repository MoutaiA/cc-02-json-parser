const { readFileSync } = require('fs');

const step_1_valid_1 = readFileSync(__dirname + '/step_1/valid.json', 'utf8');
const step_1_valid_2 = readFileSync(__dirname + '/step_1/valid2.json', 'utf8');
const step_1_valid_3 = readFileSync(__dirname + '/step_1/valid3.json', 'utf8');
const step_1_invalid_1 = readFileSync(__dirname + '/step_1/invalid.json', 'utf8');
const step_1_invalid_2 = readFileSync(__dirname + '/step_1/invalid2.json', 'utf8');

const step_2_valid_1 = readFileSync(__dirname + '/step_2/valid.json', 'utf8');

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
		},
	},
};

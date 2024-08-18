const { readFileSync } = require('fs');

const step_1_valid = readFileSync(__dirname + '/step_1/valid.json', 'utf8');
const step_1_invalid = readFileSync(__dirname + '/step_1/invalid.json', 'utf8');

module.exports = {
	STEP_1: {
		VALID: step_1_valid,
		INVALID: step_1_invalid,
	},
};

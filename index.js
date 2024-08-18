function parse(file) {
	if (!file) {
		return 1;
	}

	const chars = file.split('');

	if (chars[0] === '{' && chars.at(-1) === '}') {
		return 0;
	} else {
		return 1;
	}
}

module.exports = {
	parse,
};

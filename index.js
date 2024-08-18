function parse(file) {
	if (!file) {
		return 1;
	}

	const chars = file.split('').filter((s) => s !== ' ' && s !== '\n');

	if (isWellStructured(chars)) {
		return 0;
	}
	return 1;
}

function isWellStructured(chars) {
	if (chars[0] !== '{' && chars.at(-1) !== '}') {
		return false;
	}

	return true;
}

module.exports = {
	parse,
};

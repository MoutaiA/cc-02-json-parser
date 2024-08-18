function parse(file) {
	if (!file) {
		return 1;
	}

	const chars = file.split('').filter((s) => s !== ' ' && s !== '\n' && s !== '\t');

	if (isWellStructured(chars)) {
		return 0;
	}
	return 1;
}

function isWellStructured(chars) {
	if (chars[0] !== '{' && chars.at(-1) !== '}') {
		return false;
	}
	if (chars.length === 2) {
		return true;
	}

	const pairs = [];
	let pair = [];
	for (const c of chars) {
		if (c === '{' || c === '}') {
			continue;
		}

		if (c === ',') {
			pairs.push(structuredClone(pair));
			pair = [];
		}

		pair.push(c);
	}
	pairs.push(pair);

	for (const pair of pairs) {
		if (!isValidPair(pair)) {
			return false;
		}
	}

	return true;
}

function isValidPair(chars) {
	let openingQuotes = 0;
	let closingQuotes = 0;
	let colon = 0;
	let r = 0;

	while (r < chars.length) {
		while (r < chars.length && chars[r] !== '"') {
			r++;
		}

		openingQuotes = r++;
		while (r < chars.length && chars[r] !== '"') {
			r++;
		}
		closingQuotes = r++;
		while (r < chars.length && chars[r] !== ':') {
			r++;
		}
		if (chars[r] !== ':') {
			return false;
		}
		colon = r++;
		break;
	}

	if (chars[openingQuotes] !== '"' && chars[closingQuotes] !== '"' && chars[colon] !== ':') {
		return false;
	}

	if (!isValidValue(chars.slice(r))) {
		return false;
	}

	return true;
}

function isValidValue(chars) {
	const value = chars.join('');
	if (['true', 'false', 'null'].includes(value)) {
		return true;
	}

	let r = 0;
	if (chars[r] !== '"') {
		for (const c of chars.slice(r)) {
			if (c === '.' || c === ',') {
				continue;
			}
			const val = parseInt(c);
			if (isNaN(val)) {
				return false;
			}
		}
		return true;
	}

	let openingQuotes = 0;
	let closingQuotes = 0;
	while (r < chars.length) {
		while (r < chars.length && chars[r] !== '"') {
			r++;
		}
		openingQuotes = r++;
		while (r < chars.length && chars[r] !== '"') {
			r++;
		}
		closingQuotes = r++;
	}

	if (chars[openingQuotes] !== '"' && chars[closingQuotes] !== '"') {
		return false;
	}
	return true;
}

module.exports = {
	parse,
};

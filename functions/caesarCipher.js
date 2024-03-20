const shiftChar = (char, shiftFactor) => {
	const charCode = char.charCodeAt(0);
	let shiftedCharCode = charCode;

	if ((char >= "A" && char <= "Z") || (char >= "a" && char <= "z")) {
		const isUpperCase = char === char.toUpperCase();
		const alphabetStart = isUpperCase ? "A".charCodeAt(0) : "a".charCodeAt(0);
		const alphabetEnd = isUpperCase ? "Z".charCodeAt(0) : "z".charCodeAt(0);

		shiftedCharCode =
			alphabetStart + ((charCode - alphabetStart + shiftFactor) % 26);
		if (shiftedCharCode > alphabetEnd) {
			shiftedCharCode -= 26;
		}
	}

	return String.fromCharCode(shiftedCharCode);
};

const caesarCipher = (str, shiftFactor) => {
	return str
		.split("")
		.map((char) => shiftChar(char, shiftFactor))
		.join("");
};

export default caesarCipher;

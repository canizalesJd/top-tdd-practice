const capitalize = (input) => {
	// handles invalid inputs: input = 123456
	if (!input || typeof input !== "string") {
		return "Invalid input, try again with a valid string";
	}
	// Trim the string and split it on every blank space
	const string = input.trim().split(" ");
	// output variable
	let output = [];
	// iterate trough each word on the string
	for (let i = 0; i < string.length; i++) {
		// skip iteration if the word is an empty string
		if (string[i] === "") {
			continue;
		}
		let j = 0;
		let temp = "";
		// discard non string chars
		while (typeof string[i][j] !== "string" && j < string[i].length) {
			j += 1;
		}

		// if it's a valid value, uppercase it
		if (typeof string[i][j] === "string") {
			temp = string[i][j].toUpperCase() + string[i].slice(j + 1);
			output.push(temp);
		}
		// reset j
		j = 0;
	}
	// Trim the generated output and return it
	return output.join(" ");
};

export default capitalize;

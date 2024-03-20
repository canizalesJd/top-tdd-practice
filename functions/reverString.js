// import reverseString from "./reverseString";

const reverseString = (input) => {
	// handles invalid inputs
	if (typeof input !== "string") {
		return "Invalid input, please try again";
	}
	// handles empty strings
	if (input === "") {
		return "Can't reverse an empty string";
	}
	// handles single char inputs
	if (input.length === 1) {
		return input;
	}
	// reverses a valid string properly
	// Two pointer approach
	let l = 0;
	let r = input.length - 1;
	let charArray = input.split("");
	while (l < r) {
		// swap both values
		[charArray[l], charArray[r]] = [charArray[r], charArray[l]];
		// Move pointers
		l++;
		r--;
	}
	return charArray.join("");
};

export default reverseString;

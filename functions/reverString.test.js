import reverseString from "./reverString";

describe("reverseString", () => {
	test("reverses a valid string properly", () => {
		const result = reverseString("hello");
		expect(result).toEqual("olleh");
	});

	test("handles empty strings", () => {
		const result = reverseString("");
		expect(result).toEqual("Can't reverse an empty string");
	});

	test("handles invalid inputs", () => {
		const result = reverseString(12312312);
		expect(result).toEqual("Invalid input, please try again");
	});

	test("handles single char inputs", () => {
		const result = reverseString("a");
		expect(result).toEqual("a");
	});
});

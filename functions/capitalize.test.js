import capitalize from "./capitalize";

describe("capitalize", () => {
	test("capitalizes a valid string correctly", () => {
		const result = capitalize("testing");
		expect(result).toEqual("Testing");
	});

	test("handles invalid inputs", () => {
		const result = capitalize(1);
		expect(result).toEqual("Invalid input, try again with a valid string");
	});

	test("handles strings with multiple words", () => {
		const result = capitalize("the odin project is fun");
		expect(result).toEqual("The Odin Project Is Fun");
	});

	test("handles empty string input", () => {
		const result = capitalize("");
		expect(result).toEqual("Invalid input, try again with a valid string");
	});

	test("handles string with leading and trailing and in between whitespace", () => {
		const result = capitalize("   hello   world   ");
		expect(result).toEqual("Hello World");
	});

	test("handles string with numbers and alphanumeric characters", () => {
		const result = capitalize("hello123");
		expect(result).toEqual("Hello123");
	});
});

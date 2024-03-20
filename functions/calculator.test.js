import calculator from "./calculator";

describe("calculator", () => {
	test("sums correctly", () => {
		const result = calculator.add(2, 2);
		expect(result).toEqual(4);
	});

	test("substracts correctly", () => {
		const result = calculator.substract(2, 2);
		expect(result).toEqual(0);
	});

	test("multiplies correctly", () => {
		const result = calculator.multiply(7, 2);
		expect(result).toEqual(14);
	});

	test("divides correctly", () => {
		const result = calculator.divide(100, 2);
		expect(result).toEqual(50);
	});

	test("division by 0", () => {
		const result = calculator.divide(100, 0);
		expect(result).toEqual("Can't divide by 0");
	});

	test("add - Non numeric arguments", () => {
		const result = calculator.add("1000", 0);
		expect(result).toEqual(
			"Invalid operation, at least one argument is not numeric"
		);
	});

	test("substract - Non numeric arguments", () => {
		const result = calculator.substract("1000", 0);
		expect(result).toEqual(
			"Invalid operation, at least one argument is not numeric"
		);
	});

	test("multiply - Non numeric arguments", () => {
		const result = calculator.multiply("1000", 0);
		expect(result).toEqual(
			"Invalid operation, at least one argument is not numeric"
		);
	});

	test("divide - Non numeric arguments", () => {
		const result = calculator.divide("1000", 0);
		expect(result).toEqual(
			"Invalid operation, at least one argument is not numeric"
		);
	});
});

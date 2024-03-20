import analyzeArray from "./analizeArray";

describe("analyzeArray", () => {
	test("calculates average, min, max, and length correctly", () => {
		const result = analyzeArray([1, 8, 3, 4, 2, 6]);

		expect(result).toEqual({
			average: 4,
			min: 1,
			max: 8,
			length: 6,
		});
	});

	test("handles empty array", () => {
		const result = analyzeArray([]);

		expect(result).toEqual({
			average: NaN,
			min: undefined,
			max: undefined,
			length: 0,
		});
	});

	test("handles array with one element", () => {
		const result = analyzeArray([5]);

		expect(result).toEqual({
			average: 5,
			min: 5,
			max: 5,
			length: 1,
		});
	});
});

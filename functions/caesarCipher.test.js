import caesarCipher from "./caesarCipher";

// Unit tests for the caesarCipher function
describe("caesarCipher", () => {
	test("shifts characters correctly with positive shift factor", () => {
		expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
	});

	test("shifts characters correctly with negative shift factor", () => {
		expect(caesarCipher("Khoor, Zruog!", -3)).toBe("Hello, World!");
	});

	test("wraps from z to a correctly", () => {
		expect(caesarCipher("xyz", 1)).toBe("yza");
	});

	test("wraps from Z to A correctly", () => {
		expect(caesarCipher("XYZ", 1)).toBe("YZA");
	});

	test("keeps the same case", () => {
		expect(caesarCipher("AbCdEfG", 5)).toBe("FgHiJkL");
	});

	test("handles punctuation correctly", () => {
		expect(caesarCipher("Hello, World!", 1)).toBe("Ifmmp, Xpsme!");
	});

	test("handles empty string", () => {
		expect(caesarCipher("", 3)).toBe("");
	});
});

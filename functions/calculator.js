// validate input
const validInput = (a, b) => {
	if (typeof a !== "number" || typeof b !== "number") {
		return false;
	} else {
		return true;
	}
};

const add = (a, b) => {
	if (validInput(a, b)) {
		return a + b;
	}
	return "Invalid operation, at least one argument is not numeric";
};

const substract = (a, b) => {
	if (validInput(a, b)) {
		return a - b;
	}
	return "Invalid operation, at least one argument is not numeric";
};

const multiply = (a, b) => {
	if (validInput(a, b)) {
		return a * b;
	}
	return "Invalid operation, at least one argument is not numeric";
};

const divide = (a, b) => {
	if (validInput(a, b)) {
		if (a === 0 || b === 0) {
			return "Can't divide by 0";
		}
		return a / b;
	}
	return "Invalid operation, at least one argument is not numeric";
};

const calculator = {
	add,
	substract,
	divide,
	multiply,
};

export default calculator;

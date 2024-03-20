// array = [1, 8, 3, 4, 2, 6];
const analyzeArray = (array) => {
	if (!Array.isArray(array) || array.length === 0) {
		return {
			average: NaN,
			min: undefined,
			max: undefined,
			length: 0,
		};
	}

	const sum = array.reduce((total, value) => total + value, 0);
	const min = Math.min(...array);
	const max = Math.max(...array);
	const length = array.length;

	return {
		average: sum / length,
		min,
		max,
		length,
	};
};

export default analyzeArray;

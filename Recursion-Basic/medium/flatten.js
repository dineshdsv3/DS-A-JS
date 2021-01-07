// Write a recursive function called flatten which accepts an array of arrays and
// returns a new array with all values flattened
// flatten([1, 2, 3, [4, 5] ]) => [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) => [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) => [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) => [1,2,3

function flatten(arr) {
	let result = [];

	function helper(input) {
		if (input.length === 0) return;

		if (!Array.isArray(input[0])) {
			result.push(input[0]);
		} else {
			helper(input[0]);
		}
		helper(input.slice(1));
	}

	helper(arr);
	return result;
}

// console.log(flatten([1, 2, 3, [4, 5]]));
// console.log(flatten([1, [2, [3, 4], [[5]]]]));
// console.log(flatten([[1], [2], [3]]));
// console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]));
console.log(flatten([2, [3, [5, true, 'yup']]]));

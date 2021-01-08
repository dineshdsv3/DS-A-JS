// Write a recursive function called capitalizeWords. Given an array of words,
// return a new array containing each word capitalized

// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
let words = ['i', 'am', 'learning', 'recursion'];

function capitalizedWords(arr) {
	let result = [];

	function helper(inp) {
		if (inp.length === 0) return;

		result.push(inp[0].toUpperCase());
		helper(inp.slice(1));
	}

	helper(arr);
	return result;
}

console.log(capitalizedWords(words));

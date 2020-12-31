// Write a function called recursiveRange which accepts a number and adds up all the numbers from 0
// to the number passed to the function
// Sample recursiveRange(6) => 21
// Sample recursiveRange(10) => 55

function recursiveRange(num) {
	let result = 0;

	function helperMethod(input) {
		if (input === 0) return;
		result += input;
		helperMethod(input - 1);
	}

	helperMethod(num);
	return result;
}

console.log(recursiveRange(6));
console.log(recursiveRange(10));

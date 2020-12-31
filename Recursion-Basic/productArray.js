// Write a function valled productOfArray which takes in an array of numbers and returns the
// product of them all.
// Sample - productOfArray([1,2,3]) => 6
// Sample - productOfArray([1,2,3,10]) => 60

function productOfArray(arr) {
	let product = 1;

	function helperMethod(input) {
		if (input.length < 1) return product;
		product *= input[0];
		helperMethod(input.slice(1));
	}

	helperMethod(arr);
	return product;
}

console.log(productOfArray([1, 2, 3]));
console.log(productOfArray([1, 2, 3, 10]));

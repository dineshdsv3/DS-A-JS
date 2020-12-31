// Write a function factorial which accepts a number and returns the factorial of that number.
// A factorial is the product of an integer and all the integers below
// Sample - factorial(4) => 24

function factorial(num) {
	if (num == 0) return 1;
	if (num == 1) return 1;
	return num * factorial(num - 1);
}

console.log(factorial(5));

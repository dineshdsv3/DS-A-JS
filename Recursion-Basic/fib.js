// Write a recursive function valled 'fib' which accepts a number and returns the nth number
// in the fibonacci sequence. Recall that the fibonacci sequence is the sequence of whole numbers
// 1,1,2,3,5,8,.... which starts with 1 and 1, and where every number thereafter is equal to the
// sum of the previous two numbers
// fib(4) => 3
// fib(10) => 55
// fib(28) => 317811
// fib(35) => 9227465

function fib(num) {
	if (num <= 2) return 1;
	let arr = [1, 1];
	let start = 0;
	let next = 1;
	function helperMethod(input) {
		if (input === arr.length) return;
		arr.push(arr[start] + arr[next]);
		start++;
		next++;
		helperMethod(input);
	}
	helperMethod(num);
	return arr[arr.length - 1];
}

// Short Implementation but longer time -video

// function fib(n) {
// 	if (n <= 2) return 1;
// 	return fib(n - 1) + fib(n - 2);
// }

console.log(fib(2));
console.log(fib(10));
console.log(fib(28));
console.log(fib(500));

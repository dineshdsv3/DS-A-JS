// Write a function called sumZero which accepts a sorted array of integers. The function should find
// the first pair where the sum is 0. return an array that includes both values that sum to zero or undefied
// if a pair does not exist.
// Output - sumZero([-3,-2,-1,0,1,2,3]) => [-3,3]
// Output - sumZero([-2,0,1,3]) => undefined
// Output - sumZero([1,2,3]) => undefined

function sumZero(arr) {
	let startInd = 0;
	let endInd = arr.length - 1;

	while (endInd > startInd) {
		let sum = arr[startInd] + arr[endInd];
		if (sum === 0) {
			return [arr[startInd], arr[endInd]];
		} else if (sum > 0) {
			endInd--;
		} else if (sum < 0) {
			startInd++;
		}
	}
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3, 4]));
console.log(sumZero([-2, 0, 1, 3]));
console.log(sumZero([1, 2, 3]));

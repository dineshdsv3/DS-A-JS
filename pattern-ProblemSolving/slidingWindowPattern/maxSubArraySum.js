// Write a function called maxsubArraySum which accepts an array of integers and a number called 'n'.
// The function should calculate the maximum sum of 'n' consecutive elements in the array.
// Output - maxSubArraySum([1,2,5,2,8,1,5],2) => 10
// Output - maxSubArraySum([1,2,5,2,8,1,5],4) => 17
// Output - maxSubArraySum([4,2,1,6],1) => 6
// Output - maxSubArraySum([4,2,1,6,2],4) => 13
// Output - maxSubArraySum([],4) => null


// Solved using O(n^2) 
// Points to remember from this Challenge
// initialize max with 0, 
// loop over the array and initialize tempSum, 
// now loop over the array 'n' times, increment the tempSum value and compare that with Max value.
// Remember the codition to break when the limit exceeds

function maxSubArraySum(arr, num) {
	if (arr.length <= num) return null;
	let max = 0;
	for (let i = 0; i < arr.length; i++) {
		if (num + i > arr.length) break;
		let tempSum = 0;
		for (let j = i; j < num + i; j++) {
			tempSum += arr[j];
		}
		max = Math.max(max, tempSum);
	}
	return max;
}

console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2));
console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4));
console.log(maxSubArraySum([4, 2, 1, 6], 1));
console.log(maxSubArraySum([4, 2, 1, 6, 2], 4));
console.log(maxSubArraySum([], 4));

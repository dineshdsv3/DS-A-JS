// Given an array of integers and a number, write a function called maxSubarraySum, which finds
// the maximum sum of a subarray with the length of the number passed to the function.
// Note that a subarray must consist of consecutive elements from the original array.
// Sample Output maxSubarraySum([100,200,300,400],2) => 700
// Sample Output maxSubarraySum([1,4,2,10,23,3,1,0,20],4) => 39
// Sample Output maxSubarraySum([-3,4,0,-2,6,-1],2) => 5
// Sample Output maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) => 5
// Sample Output maxSubarraySum([2,3],3) => null

function maxSubarraySum(arr, num) {
	if (arr.length < num) return null;
	let tempSum = 0;
	let maxSum = 0;

	for (let i = 0; i < num; i++) {
		tempSum += arr[i];
	}
	maxSum = tempSum;

	for (let i = num; i < arr.length; i++) {
		tempSum = tempSum + arr[i] - arr[i - num];
		maxSum = Math.max(tempSum, maxSum);
	}
	return maxSum;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2));
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2));
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2));
console.log(maxSubarraySum([2,3],3))

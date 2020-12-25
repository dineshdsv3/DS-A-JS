// Write a function called minSubArrayLen which accepts two parameters -
// an array of positive integers and a positive integer.
// This function should return the minimal length of a contiguous subarray of which the sum is
// greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.
// SampleOutput - minSubArrayLen([2,3,1,2,4,3],7) => 2
// SampleOutput - minSubArrayLen([2,1,6,5,4],9) => 2
// SampleOutput - minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) => 1
// SampleOutput - minSubArrayLen([1,4,16,22,5,7,8,9,10],39) => 3
// SampleOutput - minSubArrayLen([1,4,16,22,5,7,8,9,10], 55) => 5
// SampleOutput - minSubArrayLen([4,3,3,8,1,2,3],11) => 2
// SampleOutput - minSubArrayLen([1,4,16,22,5,7,8,9],95) => 0

// Points to remember
// Initialize index with minimum iterations as 1
// Write a loop to increment the index if the condition doesn't match
// Declare the temporary sum inside the loop 1
// Calculate the temporary sum with minimum index first
// Use Sliding Point Pattern to calculate the sub array sum
// if meets the condition increment the index
// else after the loop completed increment the index

function minSubArrayLen(arr, num) {
	// Initialize index with minimum iterations as 1
	let ind = 1;
	// Write a loop to increment the index if the condition doesn't match
	while (ind < arr.length) {
		// Declare the temporary sum
		let tempSum = 0;
		// Calculate the temporary sum with minimum index first
		for (let i = 0; i < ind; i++) {
			tempSum += arr[i];
		}
		// Use Sliding Point Pattern to calculate the sub array sum
		for (let i = ind; i < arr.length; i++) {
			tempSum = tempSum + arr[i] - arr[i - ind];
			// if meets the condition increment the index
			if (tempSum >= num) {
				return ind;
			}
		}
		// else after the loop completed increment the index
		ind++;
	}
	return 0;
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7));
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9));
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52));
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39));
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55));
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11));
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9], 95));

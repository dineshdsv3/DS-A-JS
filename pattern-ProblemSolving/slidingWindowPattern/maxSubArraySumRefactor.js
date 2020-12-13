// Write a function called maxsubArraySum which accepts an array of integers and a number called 'n'.
// The function should calculate the maximum sum of 'n' consecutive elements in the array.
// Output - maxSubArraySum([1,2,5,2,8,1,5],2) => 10
// Output - maxSubArraySum([1,2,5,2,8,1,5,9],4) => 17
// Output - maxSubArraySum([4,2,1,6],1) => 6
// Output - maxSubArraySum([4,2,1,6,2],4) => 13
// Output - maxSubArraySum([],4) => null

// Solved using O(n^2) 
// Points to remember from this Challenge
// initialize max and tempMax
// loop over an array with num as limt and increment tempMax
// now assign max to tempMax
// Loop over an array starting from num and increment by the latest index and decrement by index-num
// calculate the max value and return

function maxSubArraySum(arr, num) {
	if (arr.length < num) return null;
	let max = 0;
	let tempMax = 0;

	for (let i = 0; i < num; i++) {
		tempMax += arr[i];
	}
    max = tempMax;
	for (let i = num; i < arr.length; i++) {
        tempMax = tempMax + arr[i]  - arr[i-num];
        max = Math.max(tempMax,max) 
    }
    console.log(max)
}

console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2));
console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4));
console.log(maxSubArraySum([4, 2, 1, 6], 1));
console.log(maxSubArraySum([4, 2, 1, 6, 2], 4));
console.log(maxSubArraySum([], 4));

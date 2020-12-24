// Write a function called averagePair. Given a "Sorted" array of integers and a target average, determine
// if there is a pair of values in the array where the average of the pair equals the target average.
// There may be more than one pair that matches the average target.
// Sample Output - averagePair([1,2,3],2.5) => true
// Sample Output - averagePair([1,3,3,5,6,7,10,12,19],8) => true
// Sample Output - averagePair([-1,0,3,4,5,6], 4.1) => false
// Sample Output - averagePair([],4) => false

// Points To Remmber - Multiple Pointers Pattern
// 1) take 0 as start index and arr.length-1 as endindex
// 2) Sort the array if it is not sorted
// 3) Compare and return result
// 4) If avg is greater decrease the end index
// 5) If avg is lesser increase the start index
function averagePair(arr, num) {
	if (arr.length <= 0) return false;
	let start = 0;
	let end = arr.length - 1;

	while (start < end) {
		let avg = (arr[start] + arr[end]) / 2;
		if (avg === num) {
			return true;
		} else if (avg > num) {
			end--;
		} else {
			start++;
		}
	}
	return false;
}

console.log(averagePair([1, 2, 3], 2.5));
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1));
console.log(averagePair([], 4));

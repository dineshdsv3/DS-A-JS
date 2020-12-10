// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique
// values in the array, there can be negative no's in the array, but it always be sorted
// Output - countUniqueValues([1,1,1,1,1,2]) => 2
// Output - countUniqueValues([1,2,3,4,5,6,7,7,1,2,13]) => 8
// Output - countUniqueValues([]) => 0
// Output - countUniqueValues([-2,-2,-1,-1,0,1]) => 4

// Frequency Counter Pattern
// function countUniqueValues(arr) {
// 	let obj1 = {};

// 	for (let val of arr) {
// 		obj1[val] = (obj1[val] || 0) + 1;
// 	}
// 	return Object.keys(obj1).length;
// }

// Multiple Pointers pattern => works only for sorted array
function countUniqueValues(arr) {
	if (arr.length === 0) return 0;
	var i = 0;
	for (var j = 1; j < arr.length; j++) {
		if (arr[i] !== arr[j]) {
			i++;
			arr[i] = arr[j];
		}
	}
	return i + 1;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2]));
console.log(countUniqueValues([1, 1, 2, 3, 4, 5, 6, 7, 7, 1, 2, 13]));
console.log(countUniqueValues([-2, -2, -1, -1, 0, 1]));

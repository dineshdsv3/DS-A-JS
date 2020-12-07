//  Write a  function called Same, which accepts two arrays, the function should return true,
//  if every value in the array has its corresponding value squared in the second array,
//  The frequency of values must be same
//  Output - same([1,2,3], [4,1,9]) => true
//  Output - same([1,2,3], [1,9]) => false
//  Output -same([1,2,1], [4,4,1]) => false

function same(arr1, arr2) {
	if (arr1.length !== arr2.length) return false;

	let freqCounter1 = {};
	let freqCounter2 = {};

	for (let val of arr1) {
		freqCounter1[val] = (freqCounter1[val] || 0) + 1;
	}
	for (let val of arr2) {
		freqCounter2[val] = (freqCounter2[val] || 0) + 1;
	}
	console.log(freqCounter1);
	console.log(freqCounter2);

	for (let key in freqCounter1) {
		if (!(key * key) in freqCounter2) {
			return false;
		}

		if (freqCounter2[key * key] != freqCounter1[key]) {
			return false;
		}
	}
	return true;
}

console.log(same([1, 2, 3], [4, 1, 9]));
console.log(same([1, 2, 3], [1, 9]));
console.log(same([1, 2, 1], [4, 4, 1]));

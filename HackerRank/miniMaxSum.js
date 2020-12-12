// Given five positive integers, find the minimum and maximum values that can be calculated by
// summing exactly four of the five integers. Then print the respective minimum and maximum values
// as a single line of two space-separated long integers.
// Output - miniMax([1,3,5,7,9]) => (16,24)

// Points to remember from this Challenge
// 1) calculate the result, map through array and put all added values in resArray and find Max & min values

function miniMax(arr) {
	let resArray = [];
	let result = arr.reduce((acc, crr) => acc + crr);

	arr.map((ele) => {
		resArray.push(result - ele);
	});

	let min = resArray[0];
	let max = resArray[0];

	resArray.map((ele) => {
		min = Math.min(ele, min);
		max = Math.max(ele, max);
	});

	console.log(min, max);
}

miniMax([1, 3, 5, 7, 9]);

// Write a recursive function called capitalizeFirst. Given an array of strings,
// Capitalize the first letter of each string in the array
// capitalizeFirst(['car','taco','banana']); => ['Car','Taco','Banana']

function capitalizeFirst(arr) {
	let resultArr = [];

	function helper(inp) {
		if (inp.length === 0) return;
		let str = inp[0];
		resultArr.push(str[0].toUpperCase() + str.slice(1));
		helper(inp.slice(1));
	}
	helper(arr);
	return resultArr;
}

console.log(capitalizeFirst(['car', 'taco', 'banana']));

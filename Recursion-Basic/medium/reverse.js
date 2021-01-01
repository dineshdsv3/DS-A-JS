// Write a function called reverse which accepts string an returns a new string in reverse
// Sample - reverse('awesome') => 'emosewa'
// Sample - reverse('rithmschool') => 'loohcsmhtir'

// Using Slice and Substring - Bit faster and small - Own(recent)
let start = Date.now();
function reverse(string) {
	let rev = '';

	function helper(input) {
		if (input.length === 0) return;
		rev += input.slice(input.length - 1);
		helper(input.substring(0, input.length - 1));
	}

	helper(string);
	console.log(Date.now() - start);
	return rev;
}

// using concat,push,pop and map - Bit slower and long - Own(Previous)
// function reverse(str) {
// 	let result = [];
// 	let strArr = str.split('');
// 	let res = '';

// 	function helper(hstr) {
// 		if (hstr.length <= 0) {
// 			return result;
// 		}
// 		result.push(hstr.pop());
// 		result = result.concat(helper(hstr));
// 	}

// 	helper(strArr);
// 	result.map((ele) => {
// 		if (ele) {
// 			res += ele;
// 		}
// 	});
// 	console.log(Date.now() - start);
// 	return res;
// }

console.log(reverse('awesome'));
console.log(reverse('rithmschool'));

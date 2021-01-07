// Write a recursive function called nestedEvenSum. Retuen the sum of all
// even numbers in an object which may contain nested objects

// Very Important
//  Contains - Nested Object converted to Flatten Object, Flatten Array,
//             Nested Object to Single array
//             Working with the nested object
var obj2 = {
	a: 2,
	b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
	c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
	d: 1,
	e: { e: { e: 2 }, ee: 'car' },
};

var obj1 = {
	outer: 2,
	obj: {
		inner: 2,
		otherObj: {
			superInner: 2,
			notANumber: true,
			alsoNotANumber: 'yup',
		},
	},
};
function nestedEvenSum(obj, sum = 0) {
	for (key in obj) {
		if (typeof obj[key] == 'object') {
			sum += nestedEvenSum(obj[key]);
		} else if (typeof obj[key] === 'number' && obj[key] % 2 == 0) {
			sum += obj[key];
		}
	}
	return sum;
}
// Resolve the nested object into an nested array
function resolveNested(obj, resVal = []) {
	for (key in obj) {
		if (typeof obj[key] == 'object') {
			resVal.push(resolveNested(obj[key]));
		} else {
			resVal.push(obj[key]);
		}
	}
	return flatten(resVal)
		.filter((ele) => ele % 2 === 0)
		.reduce((acc, crr) => acc + crr);
}
// For nested array
function flatten(arr) {
	let res = [];

	function helper(inp) {
		if (inp.length === 0) return;

		if (!Array.isArray(inp[0])) {
			res.push(inp[0]);
		} else {
			helper(inp[0]);
		}
		helper(inp.slice(1));
	}

	helper(arr);
	return res;
}

// Resolve the nested object into an object which consists of values
let resObj = {};
function flattenObj(obj) {
	for (let key in obj) {
		if (!(typeof obj[key] == 'object')) {
			// console.log('not an object', key);
			resObj[key] = obj[key];
			// console.log('res obj is ', resObj);
		} else {
			flattenObj(obj[key]);
		}
	}

	return resObj;
}

// console.log(nestedEvenSum(obj1)); // 6
// console.log(resolveNested(obj1));
// console.log(nestedEvenSum(obj2)); // 10
console.log(resolveNested(obj2)); // 10
// console.log(flattenObj(obj1));
let obj3 = { fred: 2, jill: 4, obby: { john: 5 } };

// console.log(flattenObj(obj3));

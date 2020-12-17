// Write a function called sameFrequency. Given two positive integers, find out if the two numbers
// have the same frequency of digits.
// Output - sameFrequency(182,281) => true
// Output - sameFrequency(34, 14) => false
// Output - sameFrequency(3589578, 5879385) => true
// Output - sameFrequency(22,222) => false

// function sameFrequency(num1, num2) {
// 	let str1 = num1.toString().split('');
// 	let str2 = num2.toString().split('');

// 	let obj1 = {},
// 		obj2 = {};

// 	for (let val of str1) {
// 		obj1[val] = (obj1[val] || 0) + 1;
// 	}
// 	for (let val of str2) {
// 		obj2[val] = (obj2[val] || 0) + 1;
// 	}

// 	for (let key in obj1) {
// 		if (obj1[key] !== obj2[key]) {
// 			return false;
// 		}
// 	}
// 	return true;
// }

// // without using toString inbuilt Method
// function sameFrequency(num1, num2) {
// 	// Do the math and store the individual numbers in array
// 	let arr1 = storeInArray(num1);
// 	let arr2 = storeInArray(num2);
// 	// Take two empty objects
// 	let obj1 = {},
// 		obj2 = {};
// 	// Store the values in the array to the respective objects
// 	for (let key of arr1) {
// 		obj1[key] = (obj1[key] || 0) + 1;
// 	}
// 	for (let key of arr2) {
// 		obj2[key] = (obj2[key] || 0) + 1;
// 	}
// 	// Compare both the objects and return the result
// 	for (let val in obj1) {
// 		if (!(val in obj2)) {
// 			return false;
// 		}
// 		if (obj2[val] !== obj1[val]) {
// 			return false;
// 		}
// 	}
// 	return true;
// }

// function storeInArray(num) {
// 	let arr = [];
// 	while (num > 0) {
// 		let a = parseInt(num / 10);
// 		let b = num % 10;
// 		arr.push(b);
// 		num = a;
// 	}
// 	return arr;
// }

console.log(sameFrequency(182, 281));
console.log(sameFrequency(34, 14));
console.log(sameFrequency(3589578, 5879385));
console.log(sameFrequency(22, 222));

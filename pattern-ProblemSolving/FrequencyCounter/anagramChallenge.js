// Given two strings, write a function to determine if the second string is an anagram of the first,
// An anagram is a word phrase or name formed by re-arranging the letters of another,
// such as 'cinema' formed from 'iceman'
// Output - validAnagram("", "") => true
// Output - validAnagram('aaz','zza') => false
// Output - validAnagram('anagram','nagaram') => true
// Output - validAnagram('rat','cat') => false
// Output - validAnagram('awesome','awesm') => false
// Output - validAnagram('qwerty','qeywrt') => true
// Output - validAnagram('texttwisttime','timetwisttext') => true

function validAnagram(str1, str2) {
	if (str1.length !== str2.length) return false;

	let str1Obj = {},
		str2Obj = {};

	for (let val of str1) {
		str1Obj[val] = (str1Obj[val] || 0) + 1;
	}

	for (let val of str2) {
		str2Obj[val] = (str2Obj[val] || 0) + 1;
	}

	for (let key in str1Obj) {
		if (str1Obj[key] !== str2Obj[key]) {
			return false;
		}
	}
	return true;
}

console.log(validAnagram('', ''));
console.log(validAnagram('aaz', 'zza'));
console.log(validAnagram('anagram', 'nagaram'));
console.log(validAnagram('rat', 'cat'));
console.log(validAnagram('awesome', 'awesm'));
console.log(validAnagram('qwerty', 'qeywrt'));
console.log(validAnagram('texttwisttime', 'timetwisttext'));

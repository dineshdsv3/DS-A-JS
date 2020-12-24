// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first
// string form a subsequence of the characters in the second string. In other words, the function should
// check whether the characters in the first string appear somewhere in the second string without their order changing
// Sample Output - isSubsequence('hello', 'hello world') => true
// Sample Output - isSubsequence('sing','sting') => true
// Sample Output - isSubsequence('abc', 'abracadabra') => true
// Sample Output - isSubsequence('abc', 'acb') => false

// Points To Remember - Multiple Point Pattern
// compare the both strings by each character
// if character matches move to next character in both strings
// If not matches increment character in 2nd string
// If length of the str1 completes return true else retrun false

function isSubsequence(str1, str2) {
	let s1 = 0;
	let s2 = 0;
	// let count = 0;
	while (s1 < str1.length && s2 < str2.length) {
		if (str1[s1] === str2[s2]) {
			s1++;
			s2++;
			// count++;
			if (s1 === str1.length) return true; // optimal solution
		} else {
			s2++;
		}
	}
	return false;
}

console.log(isSubsequence('hello', 'hello world'));
console.log(isSubsequence('sing', 'sting'));
console.log(isSubsequence('abc', 'abracadabra'));
console.log(isSubsequence('abc', 'acb'));

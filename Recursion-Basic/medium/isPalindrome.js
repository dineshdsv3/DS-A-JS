// Write a recursive function called isPalindrome which returns true if the string passed
// to it is a palindrome. Otherwise it returns false
//Sample Ouput - isPalindrome('awesome') => false
//Sample Ouput - isPalindrome('foobar') => false
//Sample Ouput - isPalindrome('tacocat') => true
//Sample Ouput - isPalindrome('amanaplanacanalpanama') => true
//Sample Ouput - isPalindrome('amanaplanacanalpandemonium') => false

function isPalindrome(str) {
	let start = 0;
	let end = str.length - 1;
	let res1;
	function helper(input) {
		if (start > input.length / 2) {
			res1 = true;
			return;
		}
		// console.log(input[start], input[end]);
		if (input[start] !== input[end]) {
			res1 = false;
			return;
		}
		start++;
		end--;
		helper(input);
	}
	helper(str);
	return res1;
}

console.log(isPalindrome('awesome'));
console.log(isPalindrome('froobarf'));
console.log(isPalindrome('tacocat'));
console.log(isPalindrome('amanaplanacanalpanama'));
console.log(isPalindrome('amanaplanacanalpandemonium'));

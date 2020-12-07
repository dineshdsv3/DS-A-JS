// Write a function which takes in a string and returns count of each character in the string.

function charCount(str) {
	let result = {};

	for (let i = 0; i < str.length; i++) {
		let char = str[i].toLowerCase();
		if (result[char] > 0) {
			result[char]++;
		} else {
			result[char] = 1;
		}
	}
	console.log(result);
}

charCount('abab');
charCount('Hhello');

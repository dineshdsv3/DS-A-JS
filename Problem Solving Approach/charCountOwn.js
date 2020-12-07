// Write a function which takes in a string and returns count of each character in the string.

function charCount(char) {
	let result = {};

	for (let i = 0; i < char.length; i++) {
		if (result[char[i]] > 0) {
			result[char[i]]++;
		} else {
			result[char[i]] = 1;
		}
	}
	console.log(result);
}

charCount('abab');
charCount('Hhello')

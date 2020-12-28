let start = Date.now();
function repeatedString(s, n) {
	let tempString = s;
	let count = 0;
	for (let i = s.length; i < n; i++) {
		tempString += tempString[i - s.length];
	}
	for (let i = 0; i < tempString.length; i++) {
		let ele = tempString[i];
		if (ele === 'a') {
			count++;
		}
	}

	console.log(`time is: ${Date.now() - start}`);
	return count;
}

console.log(repeatedString('abc', 3));
console.log(repeatedString('abc', 9878));

// Solved using O(2n) need to solve it using O(logn) or O(n)
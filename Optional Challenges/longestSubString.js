function longestSubString(str) {
	let start = 0;
	let seen = {};
	let longest = 0;

	for (let i = 0; i < str.length; i++) {
		let char = str[i];

		if (seen[char]) {
            //  = 6
			console.log("Start is "+start);
			start = Math.max(start, seen[char]);
			console.log("Start after is "+ start);
		}

		longest = Math.max(longest, i - start + 1);

		seen[char] = i + 1;

		console.log(longest);
		console.log(seen);
    }
    return longest;
}

console.log(longestSubString('bb'));

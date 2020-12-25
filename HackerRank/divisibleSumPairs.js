// Complete the divisibleSumPairs function. It should return the integer count
// of pairs where ar[i] +ar[j] is divisible by k
// Output divisibleSumPairs(6, 3, [1,3,2,6,1,2]) => 5

// solved by using O[n^2]
function divisibleSumPairs(n, k, ar) {
	let count = 0;
	for (let i = 0; i < ar.length; i++) {
		for (let j = i + 1; j < ar.length; j++) {
			if ((ar[i] + ar[j]) % k === 0) {
				count++;
			}
		}
	}
	return count;
}

console.log(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]));

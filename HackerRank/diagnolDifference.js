// Given a square matrix, calculate the absolute difference between the sums of its diagonals.
// For example, the square matrix  is shown below:
// 1 2 3
// 4 5 6
// 9 8 9
// The left-to-right diagonal = 1+5+9 => 15. The right to left diagonal 3+5+9=17 . Their absolute difference is |15-17| =>2.

// Points to remember from this Challenge
// 1) When trying to solve 2d arrays, remember about the 2D indexes = arr[0][0]
// 2) In the line 16 remember about the logic while dealing with the indexes

function diagnolDifference(arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i][i];
		sum -= arr[i][arr.length - i - 1];
    }
    return Math.abs(sum)
}

console.log(
	diagnolDifference([
		[11, 2, 4],
		[4, 5, 6],
		[10, 8, -12],
	])
);

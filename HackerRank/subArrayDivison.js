// Given a chocolate bar, two children, Lily and Ron, are determining how to share it.
// Each of the squares has an integer on it. Lily decides to share a contiguous segment of the bar selected such that:
// The length of the segment matches Ron's birth month, and, The sum of the integers on the squares is equal to his birth day.

// You must determine how many ways she can divide the chocolate.
// Consider the chocolate bar as an array of squares, s=[2,2,1,3,2].
// She wants to find segments summing to Ron's birth day,  d = 4,
// with a length equalling his birth month, m = 2.
// In this case, there are two segments meeting her criteria: [2,2] and [1,3].


// Points to Remember - Sliding Window Pattern
// Let take calculate sum of 'm' times by looping over an array
// Now loop over an array by increase it by next element and decrease by previous element
// Increment the count based on the condition

function birthday(s, d, m) {
    let count = 0
    let sum = 0
    for (let i = 0; i < m; i++) sum += s[i]
    if (sum === d) count++
    for (let i = m, j = 0; i < s.length; i++) {
        sum -= s[j]
        sum += s[i]
        j++
        if (sum === d) count++
    }
    return count
	// let count = 0;
	// let sum = 0;
	// for (let i = 0; i < m; i++) {
	// 	sum += s[i];
	// 	console.log(sum, i);
	// 	if (sum === d) {
	// 		count++;
	// 	}
	// }

	// for (let i = m, j = 0; i < s.length; i++) {
	// 	sum -= s[j];
	// 	sum += s[i];
	// 	j++;
	// 	if (sum === d) {
	// 		count++;
	// 	}
	// }
	// return count;
}

console.log(birthday([2, 2, 1, 3, 2], 4, 2));

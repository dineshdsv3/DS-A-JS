// Merge two sorted linked lists - linkedin Post - NOt so successfult
// l1 = [1,2,4] l2 = [1,3,4]
// Output = [1,1,2,3,4,4]
// Dont use it in production it contains bugs

let l1 = [1, 2, 4, 5],
	l2 = [1, 3, 4, 6];

function mergeSortedArr(l1, l2) {
	let start1 = 0;
	let start2 = 0;
	let result = [];

	while (Math.min(start1, start2) < Math.min(l1.length, l2.length)) {
		if (l1[start1] == l2[start2]) {
			result.push(l1[start1]);
			result.push(l2[start2]);
			start1++;
			start2++;
		} else if (l1[start1] < l2[start2]) {
			result.push(l1[start1]);
			start1++;
		} else if (l1[start1] > l2[start2]) {
			result.push(l2[start2]);
			start2++;
		} else {
			start1++;
			start2++;
		}
	}
	return result;
}

console.log(mergeSortedArr(l1, l2));

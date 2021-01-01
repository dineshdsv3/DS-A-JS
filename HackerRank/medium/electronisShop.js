// A person wants to determine the most expensive computer keyboard and USB drive that can be purchased
// with a given budget. Given price lists for keyboards and USB drives and a budget, find the cost to
// buy them. If it is not possible to buy both items, return -1.
// Sample getMoneySpent([3,1], [5,2,8], 10)
// Sample getMoneySpent([4],[5],5)

// Solved using O(n^2)
function getMoneySpent(keyboards, drives, b) {
	let keyb = keyboards.filter((ele) => ele < b);
	let dri = drives.filter((ele) => ele < b);
	let max = 0;
	let resArr = [];
	if (!keyb.length || !dri.length) {
		return -1;
	} else {
		for (let i = 0; i < keyb.length; i++) {
			for (let j = 0; j < dri.length; j++) {
				if (keyb[i] + dri[j] <= b) {
					resArr.push(keyb[i] + dri[j]);
				}
			}
		}
	}
	resArr.map((ele) => {
		if (ele > max) {
			max = ele;
		}
	});
	return max;
}

console.log(getMoneySpent([3, 1], [5, 2, 8], 10));
console.log(getMoneySpent([4], [5], 5));

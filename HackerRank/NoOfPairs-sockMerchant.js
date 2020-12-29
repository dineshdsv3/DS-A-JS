// Alex works at a clothing store. There is a large pile of socks that must be paired by color for sale.
// Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

// For example, there are n=7 socks with colors ar= [1,2,1,2,1,3,2]. There is one pair of color "1" and one of color "2".
//  There are three odd socks left, one of each color. The number of pairs is 2.

function sockMerchant(n, ar) {
	let obj = {};
	let pairs = 0;

	for (let val of ar) {
		obj[val] = (obj[val] || 0) + 1;
	}
	for (let key in obj) {
		if (obj[key] > 1) {
			pairs = pairs + Math.floor(obj[key] / 2);
		}
	}
	return pairs;
}

console.log(sockMerchant(7, [1, 2, 1, 2, 1, 3, 2]));

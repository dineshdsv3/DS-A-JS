// Sam's house has an apple tree and an orange tree that yield an abundance of fruit. Using the information given below, determine the number of apples and oranges that land on Sam's house.

// The red region denotes the house, where s  is the start point, and t  is the endpoint. The apple tree is to the left of the house, and the orange tree is to its right.
// Assume the trees are located on a single point, where the apple tree is at 'a' point , and the orange tree is at 'b' point .
// When a fruit falls from its tree, it lands 'd' units of distance from its tree of origin along the x-axis.
// *A negative value of 'd' means the fruit fell 'd' units to the tree's left,
// and a positive value of 'd' means it falls 'd' units to the tree's right. *

function countApplesAndOranges(s, t, a, b, apples, oranges) {
	let houseArr = [],
		appleCount = 0,
		orangeCount = 0;
	for (let i = s; i <= t; i++) {
		houseArr.push(i);
	}

	apples.map((ele) => {
		if (houseArr.includes(ele + a)) {
			appleCount++;
		}
	});
	oranges.map((ele) => {
		if (houseArr.includes(ele + b)) {
			orangeCount++;
		}
	});
	console.log(appleCount);
	console.log(orangeCount);
}

countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);

// More optimized & easy solution.
function countApplesAndOranges(s, t, a, b, apples, oranges) {
	let appleCount = 0,
		orangeCount = 0;

	apples.map((ele) => {
		if (ele + a >= s && ele + a <= t) {
			appleCount++;
		}
	});
	oranges.map((ele) => {
		if (ele + b >= s && ele + b <= t) {
			orangeCount++;
		}
	});
	console.log(appleCount);
	console.log(orangeCount);
}

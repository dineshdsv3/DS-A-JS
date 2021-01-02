// Two cats and a mouse are at various positions on a line. You will be given their starting positions.
//  Your task is to determine which cat will reach the mouse first, assuming the mouse does not move
// and the cats travel at equal speed. If the cats arrive at the same time,
// the mouse will be allowed to move and it will escape while they fight.

// POM- Calculate the distance between

function catAndMouse(x, y, z) {
	let xDist = Math.abs(x - z);
	let yDist = Math.abs(y - z);

	if (xDist < yDist) {
		return 'Cat A';
	} else if (yDist < xDist) {
		return 'Cat B';
	} else {
		return 'Mouse C';
	}
}

console.log(catAndMouse(2, 5, 4));

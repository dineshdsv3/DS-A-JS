function countDown(num) {
	if (num < 0) {
		//Base case
		return;
	}
	console.log(num);
	num--; // changing input

	countDown(num); // calling function recursively again
}


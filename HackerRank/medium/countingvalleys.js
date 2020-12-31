// An avid hiker keeps meticulous records of their hikes. During the last hike that took exactly "steps" steps,
//  for every step it was noted if it was an uphill, U, or a downhill, D step. Hikes always start and
// end at sea level, and each step up or down represents a "1" unit change in altitude. We define the
// following terms:

// mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
// A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.
// Given the sequence of up and down steps during a hike,
// find and print the number of valleys walked through.
// Sample Output - countingvalleys(8,UDDDUDUU) => 1
// Sample Output - countingvalleys(12,DDUUDDUDUUUD) => 2

function countingvalleys(len, str) {
	let seaLevel = 0;
	let valleyCount = 0;

	for (let i = 0; i < str.length; i++) {
		if (str[i] === 'U') {
			seaLevel++;
			if (seaLevel == 0) {
				valleyCount++;
			}
		} else {
			seaLevel--;
		}
	}
	return valleyCount;
}

console.log(countingvalleys(8, 'UDDDUDUU'));
console.log(countingvalleys(12, 'DDUUDDUDUUUD'));

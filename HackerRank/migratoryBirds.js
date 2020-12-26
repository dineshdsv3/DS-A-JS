//  You have been asked to help study the population of birds migrating across the continent.
//  Each type of bird you are interested in will be identified by an integer value.
//  Each time a particular kind of bird is spotted, its id number will be added to your array of
//  sightings. You would like to be able to find out which type of bird is most common given a list of sightings.
//  Your task is to print the type number of that bird and if two or more types of birds are equally common,
//  choose the type with the smallest ID number.

// For example, assume your bird sightings are of types arr=[1,1,2,2,3]. There are two each of types "1" and "2",
// and one sighting of type "3". Pick the lower of the two types seen twice: type "1".

// Sample Output - migratoryBirds([1, 4, 4, 4, 5, 3]) => 4
// Sample Output - migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]) => 3

function migratoryBirds(arr) {
	let obj = {};

	arr.map((ele) => {
		obj[ele] = (obj[ele] || 0) + 1;
	});

	let max = 0;
	let finalResult = 0;

	for (let key in obj) {
		if (obj[key] > max) {
			finalResult = key;
			max = obj[key];
		}
	}
	return finalResult;
}

console.log(migratoryBirds([1, 4, 4, 4, 5, 3]));
console.log(migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]));

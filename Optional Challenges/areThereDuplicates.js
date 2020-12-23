// Implement a function called, areThereDuplicates which accepts a variable number of arguments,
// and checks whether there are any duplicates among the arguments passed in.
// You can solve this using the frequency counter pattern Or the multiple pointers pattern.
// Sample Output - areThereDuplicates(1,2,3) => false
// Sample Output - areThereDuplicates(1,2,2) => true
// Sample Output - areThereDuplicates('a', 'b', 'c', 'a') => true

function areThereDuplicates(...args) {
	let obj1 = {};

	for (let val of args) {
		obj1[val] = (obj1[val] || 0) + 1;
	}

    for(let key in obj1) {
        if(obj1[key] > 1){
            return true;
        }
    }
    return false
}

console.log(areThereDuplicates(1, 2, 3));
console.log(areThereDuplicates(1, 2, 2));
console.log(areThereDuplicates('a', 'b', 'c', 'a', 'b', 'b'));

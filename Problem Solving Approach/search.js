// Given a sorted array of integers, write a function called "search", that accepts a values &
// returns the index where the value passed to the function is located. If the value is not found return -1;

// Output - search([1,2,3,4,5,6],4) => 3
// Output - search([1,2,3,4,5,6],6) => 5
// Output - search([1,2,3,4,5,6], 11) => -1

function search(arr, num) {
	for(let i = 0; i < arr.length; i++) {
        if(arr[i] == num) {
            return i;
        }
    }

    return -1;
}

console.log(search([1, 2, 3, 4, 5, 6], 4));
console.log(search([1, 2, 3, 4, 5, 6], 6));
console.log(search([1, 2, 3, 4, 5, 6], 11));

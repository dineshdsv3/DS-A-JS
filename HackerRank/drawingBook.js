// A teacher asks the class to open their books to a page number. A student can either start turning
// pages from the front of the book or from the back of the book. They always turn pages one at a time.
// When they open the book, page "1" is always on the right side:

// When they flip page 1, they see pages 2 and 3. Each page except the last page will always be printed on both sides.
// The last page may only be printed on the front, given the length of the book.
// If the book is "n" pages long, and a student wants to turn to page 'p',
// what is the minimum number of pages to turn? They can start at the beginning or the end of the book.

// Using iteration
// function pageCount(n, p) {
// 	let frontPageCount = 0;
// 	let backPageCount = 0;
// 	if (p == 1) return 0;
// 	if (n % 2 === 0 && p == n - 1) {
// 		return 1;
// 	}
// 	for (let i = 1; i < p; i++) {
// 		if (i !== p) {
// 			frontPageCount = frontPageCount + 0.5;
// 		}
// 	}

// 	backPageCount = (n - p) * 0.5;

// 	if (p % 2 === 0) {
// 		frontPageCount = Math.ceil(frontPageCount);
// 	} else {
// 		frontPageCount = Math.floor(frontPageCount);
// 	}

// 	return Math.min(frontPageCount, Math.floor(backPageCount));
// }

// Using formula
function pageCount(n, p) {
	let frontPageCount = 0,
		backPageCount = 0;
	if (p == 1) return 0;
	if (n % 2 === 0 && p == n - 1) {
		return 1;
	}

	frontPageCount = p * 0.5;
	backPageCount = (n - p) * 0.5;

	return Math.min(Math.floor(frontPageCount), Math.floor(backPageCount));
}

console.log(pageCount(15, 5));

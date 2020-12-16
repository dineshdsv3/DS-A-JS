// HackerLand University has the following grading policy:

// Every student receives a grade in the inclusive range from 0 to 100.
// Any grade less than 38 is a failing grade.
// Sam is a professor at the university and likes to round each student's grade according to these rules:

// If the difference between the grade and the next multiple of 5 is less than 3, round grade up to the next multiple of .
// If the value of grade  is less than 38, no rounding occurs as the result will still be a failing grade.

function gradingStudents(grades) {
	let result = [];
	grades.map((ele) => {
		if (ele < 38) {
			result.push(ele);
		} else if ((ele + 2) % 5 === 0) {
			result.push(ele + 2);
		} else if ((ele + 1) % 5 === 0) {
			result.push(ele + 1);
		} else {
			result.push(ele);
		}
	});
	return result;
}

console.log(gradingStudents([73, 67, 38, 33]));

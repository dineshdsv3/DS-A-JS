// Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.
// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

// Points to remember from this Challenge
// Remember the split function and toString() inbuilt method.
// This can be solved more effeciently by using the array.join() method also

function timeConversion(s) {
	const splitArr = s.split(':');
	const givenHours = splitArr[0];
	const min = splitArr[1];
	const format = splitArr[2].split('')[2];
	const sec = splitArr[2].split('')[0].toString() + splitArr[2].split('')[1].toString();
	let hour = parseInt(givenHours);
	const hours = () => {
		if (format == 'P') {
			if (hour !== 12) {
				hour += 12;
			}
		} else {
			if (hour == 12) {
				hour = '00';
			}
		}
	};

	hours();

	return `${hour < 10 && hour > 0 ? '0' + hour : hour}:${min}:${sec}`;
}

console.log(timeConversion('07:05:45PM'));

function power(base, exponent) {
	let result = 1;

	function helperMethod(helpBase, helpExp) {
		if (helpExp < 1) {
			return;
		}
		result *= helpBase;
		helpExp--;
		helperMethod(helpBase, helpExp);
	}

	helperMethod(base, exponent);

	return result;
}
console.log(power(2, 4));

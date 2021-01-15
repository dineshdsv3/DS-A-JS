const flexiConfig = {
	items: [
		{
			name: 'personname',
			label: "Person's Name",
			type: 'TextField',
		},
		{
			name: 'states',
			label: "Person's state",
			type: 'DropDown',
			values: ['Maharashtra', 'Kerala', 'Tamil Nadu'],
		},
	],
	children: [
		{
			items: [
				{
					name: 'personname2',
					label: "Person's Name2",
					type: 'TextField',
				},
				{
					name: 'states2',
					label: "Person's state2",
					type: 'DropDown',
					values: ['Maharashtra', 'Kerala', 'Tamil Nadu'],
				},
			],
			children: [
				{
					items: [
						{
							name: 'personname3',
							label: "Person's Name3",
							type: 'TextField',
						},
						{
							name: 'states3',
							label: "Person's state3",
							type: 'DropDown',
							values: ['Maharashtra', 'Kerala', 'Tamil Nadu'],
						},
					],
				},
			],
		},
	],
};

let resVal = [];

function resolveNested(obj) {
	for (key in obj) {
		if (typeof obj[key] == 'object') {
			if (Array.isArray(obj[key])) {
				if (obj[key].length == 2) {
					resVal.push(obj[key]);
				}
				// console.log(obj[key]);
			}
			// console.log(obj[key]);
			resolveNested(obj[key]);
		}
	}
	// return resVal;
}

console.log(resolveNested(flexiConfig));
console.log(resVal);

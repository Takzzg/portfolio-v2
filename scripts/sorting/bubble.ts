export const sort = (array: number[]) => {
	console.log("bubble sort");

	let arrayLen = array.length;
	for (let i = 1; i < arrayLen - 1; i++) {
		let swapped = false;

		for (let j = 0; j < array.length - i; j++) {
			if (array[j] > array[j + 1]) {
				let tmp = array[j];
				array[j] = array[j + 1];
				array[j + 1] = tmp;
				swapped = true;
			}
		}

		if (!swapped) break;
	}

	return array;
};

export const step = (array: number[]) => {
	console.log("bubble step");
	let i = 0;
	while (array[i] < array[i + 1]) i++;

	let swapped = false;
	for (let j = 0; j < array.length - i; j++) {
		if (array[j] > array[j + 1]) {
			let tmp = array[j];
			array[j] = array[j + 1];
			array[j + 1] = tmp;
			swapped = true;
		}
	}

	if (!swapped) return "done";
	return array;
};

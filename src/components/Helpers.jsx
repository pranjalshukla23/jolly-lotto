export const generateRandomNum = (quantity, max) => {
	const set = []
	while (set.length < quantity) {
		set.push(Math.floor(Math.random() * max) + 1)
	}

	return set
}

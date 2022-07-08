export const timeToTime = (time) => {
	const splitTime = time.split('-')
	console.log(splitTime)
	return [splitTime[2], splitTime[1], splitTime[0]].join('.')
}
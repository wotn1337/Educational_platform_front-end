export const drawGrid = (ctx, width, height, cellSize, lineWidth, lineColor) => {
	ctx.beginPath()
	ctx.lineWidth = lineWidth
	ctx.strokeStyle = lineColor

	for (let x = 0; x <= width * cellSize; x += cellSize) {
		ctx.moveTo(x, 0)
		ctx.lineTo(x, height * cellSize)
	}

	for (let y = 0; y <= height * cellSize; y += cellSize) {
		ctx.moveTo(0, y)
		ctx.lineTo(width * cellSize, y)
	}

	ctx.stroke()
}

export const clearCanvas = (ctx, width, height, cellSize) => {
	ctx.beginPath()
	ctx.fillStyle = 'white'
	ctx.fillRect(0, 0, width * cellSize, height * cellSize)
}

export const drawLine = (ctx, p1, p2, cellSize) => {
	ctx.moveTo(p1.x * cellSize, p1.y * cellSize)
	ctx.lineTo(p2.x * cellSize, p2.y * cellSize)
	ctx.stroke()
}

export const drawLines = (ctx, points, cellSize, lineWidth, lineColor) => {
	ctx.beginPath()
	ctx.lineWidth = lineWidth
	ctx.strokeStyle = lineColor
	ctx.lineCap = 'round'
	for (let i = 1; i < points.length; i++) {
		drawLine(ctx, points[i - 1], points[i], cellSize, lineWidth, lineColor)
	}
}

export const redrawPicture = (ctx, width, height, points, cellSize, lineWidth, lineColor) => {
	clearCanvas(ctx, width, height, cellSize)
	drawGrid(ctx, width, height, cellSize, 1, 'black')
	drawLines(ctx, points, cellSize, lineWidth, lineColor)
}

const getInstruction = (p1, p2) => {
	const dx = (p2.x - p1.x)
	const xWord = dx > 0 ? 'вправо' : 'влево'
	const xInstruction = dx === 0 ? '' : `${Math.abs(dx)} ${xWord}`

	const dy = (p2.y - p1.y)
	const yWord = dy < 0 ? 'вверх' : 'вниз'
	const yInstruction = dy === 0 ? '' : `${Math.abs(dy)} ${yWord}`

	return `${xInstruction} ${yInstruction}`
}

export const createInstrucionsList = (points) => {
	const instructions = []
	for (let i = 1; i < points.length; i++) {
		instructions.push(getInstruction(points[i - 1], points[i]))
	}
	return instructions
}
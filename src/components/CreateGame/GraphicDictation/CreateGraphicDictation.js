import React from 'react'
import Controls from "./Controls/Controls";
import GraphDictation from "../../Games/GraphDictation/GraphDictation";

const CreateGraphicDictation = ({width, height, pointSize = 20, cellSize = 100, ...props}) => {
	// useEffect(() => {
	// 	setCtx(can.current.getContext('2d'))
	// 	can.current.width = width * cellSize
	// 	can.current.height = height * cellSize
	// }, [width, height])
	//
	// useEffect(() => {
	// 	if (ctx) {
	// 		drawGrid()
	// 	}
	// }, [ctx, width, height])
	//
	// useEffect(() => {
	// 	if (ctx) {
	// 		drawPicture()
	// 	}
	// }, [picture])
	//
	// const drawGrid = () => {
	// 	ctx.lineWidth = 1
	// 	for (let x = cellSize; x < width * cellSize; x += cellSize) {
	// 		ctx.moveTo(x, 0)
	// 		ctx.lineTo(x, height * cellSize)
	// 	}
	//
	// 	for (let y = cellSize; y < height * cellSize; y += cellSize) {
	// 		ctx.moveTo(0, y)
	// 		ctx.lineTo(width * cellSize, y)
	// 	}
	//
	// 	ctx.strokeStyle = 'black'
	// 	ctx.stroke()
	// }
	//
	// const addPointToLine = (point) => {
	// 	const lastPoint = picture[picture.length - 1]
	// 	if (!(lastPoint?.x === point.x && lastPoint?.y === point.y)) {
	// 		setPicture([...picture, point])
	// 		if (picture.length > 0) {
	// 			// drawLine(picture[picture.length - 1], point)
	// 			addInstruction(picture[picture.length - 1], point)
	// 		}
	// 	}
	// }
	//
	// const drawLine = (p1, p2) => {
	// 	ctx.strokeStyle = 'red'
	// 	ctx.beginPath()
	// 	ctx.moveTo(p1.x * cellSize, p1.y * cellSize)
	// 	ctx.lineWidth = 3
	// 	ctx.lineTo(p2.x * cellSize, p2.y * cellSize)
	// 	ctx.stroke()
	// }
	//
	// const getInstruction = (p1, p2) => {
	// 	const dx = (p2.x - p1.x)
	// 	const xWord = dx > 0 ? 'вправо' : 'влево'
	// 	const xInstruction = dx === 0 ? '' : `${Math.abs(dx)} ${xWord}`
	//
	// 	const dy = (p2.y - p1.y)
	// 	const yWord = dy < 0 ? 'вверх' : 'вниз'
	// 	const yInstruction = dy === 0 ? '' : `${Math.abs(dy)} ${yWord}`
	//
	// 	return `${xInstruction} ${yInstruction}`
	// }
	//
	// const addInstruction = (p1, p2) => {
	// 	setInstructions([...instructions, getInstruction(p1, p2)])
	// }
	//
	// const undo = () => {
	// 	const lineCopy = [...picture]
	// 	lineCopy.pop()
	// 	setPicture(lineCopy)
	//
	// 	const instCopy = [...instructions]
	// 	instCopy.pop()
	// 	setInstructions(instCopy)
	// }
	//
	// const clear = () => {
	// 	ctx.fillStyle = 'white'
	// 	ctx.fillRect(0, 0, width, height)
	// 	ctx.beginPath()
	// 	drawGrid()
	// 	setPicture([])
	// 	setInstructions([])
	// }
	//
	// const drawPicture = () => {
	// 	ctx.fillStyle = 'white'
	// 	ctx.fillRect(0, 0, width, height)
	// 	ctx.beginPath()
	// 	drawGrid()
	//
	// 	for (let i = 1; i < picture.length; i++) {
	// 		drawLine(picture[i - 1], picture[i])
	// 	}
	// }

	return (
		<section className='content'>
			<Controls
				width={width}
				height={height}
				setSize={props.setSize}
				setColor={props.setColor}
				color={props.color}
				lineWidth={props.lineWidth}
				setLineWidth={props.setLineWidth}
			/>
			<GraphDictation
				width={width}
				height={height}
				cellSize={cellSize}
				pointSize={pointSize}
				color={props.color}
				lineWidth={props.lineWidth}
			/>
		</section>
	)
}

export default CreateGraphicDictation
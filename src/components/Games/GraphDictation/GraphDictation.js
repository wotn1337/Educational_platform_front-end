import React, {useEffect, useRef, useState} from 'react'
import s from './GraphDictation.module.css'
import {clearCanvas, drawGrid, redrawPicture} from "./gameFunctions";
import {wrongGameNotification} from "../../../notifications/notifications";
import Instructions from "./Instructions/Instructions";
import EndGameModal from "../EndGameModal/EndGameModal";


const GraphDictation = ({height, width, pointSize, color, lineWidth, inGame, ...props}) => {
	const cellSize = props.inLesson ? props.cellSize / 1.55 : props.cellSize
	const [isGameFinished, setIsGameFinished] = useState(inGame)
	const [currentInstIndex, setCurrentInstIndex] = useState(0)
	const [ctx, setCtx] = useState(null)
	const [picState, setPicState] = useState(props.picture ? [props.picture[0]] : props.points)
	const [picture, setPicture] = useState(props.picture?.slice(1))
	const [openEndGameModal, setOpenEndGameModal] = useState(false)
	const [startTime, setStartTime] = useState(new Date().getTime())
	const [totalTime, setTotalTime] = useState(new Date().getTime())
	const can = useRef(null)
	const points = []

	// Заполняет массив точек
	for (let y = 0; y <= height; y++) {
		for (let x = 0; x <= width; x++) {
			points.push({x, y})
		}
	}

	// Устанавливает контекст канваса в стейт при вмонтировании
	useEffect(() => setCtx(can.current.getContext('2d')), [])

	// Изменяет размер канваса
	useEffect(() => {
		can.current.width = width * cellSize
		can.current.height = height * cellSize
		if (ctx) {
			clearCanvas(ctx, width, height, cellSize)
			drawGrid(ctx, width, height, cellSize, 1, 'black')
		}
	}, [ctx, width, height, cellSize])

	// Перерисовывает изображение
	useEffect(() => {
		if (ctx) {
			if (picState.length > 1) {
				redrawPicture(ctx, width, height, picState, cellSize, lineWidth, color)
			} else {
				clearCanvas(ctx, width, height, cellSize)
				drawGrid(ctx, width, height, cellSize, 1, 'black')
			}
		}
	}, [ctx, width, height, picState, cellSize, lineWidth, color])

	// Сравнивает рисунок с эталонным
	useEffect(() => {
		if (props.picture && !picture?.length) {
			setIsGameFinished(true)
			setTotalTime(new Date().getTime() - startTime)
			setTimeout(() => {
				setOpenEndGameModal(true)
			}, 2000)
		}
		if (props.setPoints)
			props.setPoints(picState)
	}, [picState])

	// Начинает игру
	const startGame = () => {
		setIsGameFinished(false)
		setStartTime(new Date().getTime())
	}

	// Добавляет точку к изображению
	const addPointToPicState = (point) => {
		if (!isGameFinished) {
			if (props.picture) {
				const pictureCopy = [...picture]
				const first = pictureCopy.shift()
				if (point.x !== first.x || point.y !== first.y) {
					wrongGameNotification()
				} else {
					setPicState([...picState, point])
					setPicture(pictureCopy)
					setCurrentInstIndex(currentInstIndex + 1)
				}
			} else {
				setPicState([...picState, point])
			}
		}
	}

	// Очищает канвас
	const clear = () => {
		clearCanvas(ctx, width, height, cellSize)
		drawGrid(ctx, width, height, cellSize, 1, 'black')
		setPicState([])
	}

	// Отменяет последнее действие
	const undo = () => {
		const picStateCopy = [...picState]
		picStateCopy.pop()
		setPicState(picStateCopy)
	}

	// Устанавливает задний фон элемента
	const setBackgroundColorOnHover = (e, color) => {
		e.target.style.backgroundColor = color
	}

	// Перезапускает игру
	const restartGame = () => {
		clear()
		setPicState([props.picture[0]])
		setCurrentInstIndex(0)
		setPicture(props.picture.slice(1))
		setIsGameFinished(true)
		setOpenEndGameModal(false)
	}

	return (
		<div className={s.wrapper}>
			<div
				className={s.canvasWrapper}
				style={{height: height * cellSize + 'px', display: inGame ? 'grid' : 'block'}}
			>
				<canvas id='graphic_dictation' ref={can}/>
				{points.map((point) => {
					const index = props.picture?.findIndex(p => p.x === point.x && p.y === point.y)
					const size = index === 0 ? pointSize + 5 : pointSize
					return (
						<div
							onClick={() => addPointToPicState(point)}
							className={s.point}
							style={{
								top: point.y * cellSize - size / 2 + 'px',
								left: point.x * cellSize - size / 2 + 'px',
								width: size,
								height: size,
								backgroundColor: index === 0 ? color : 'transparent',
							}}
							key={point.x + '_' + point.y}
							onMouseEnter={index !== 0 ? e => setBackgroundColorOnHover(e, color) : undefined}
							onMouseLeave={index !== 0 ? e => setBackgroundColorOnHover(e, '') : undefined}
						/>
					)
				})}
				{inGame && <Instructions points={props.picture} current={currentInstIndex} height={cellSize * height}/>}
			</div>
			<div className={s.buttons}>
				{!!picState.length && !inGame &&
					<>
						<button className='btn' onClick={clear}>Очистить</button>
						<button className='btn' onClick={undo}>Отменить</button>
					</>
				}
				{inGame &&
					<button className='btn' onClick={isGameFinished ? startGame : restartGame}>
						{isGameFinished ? 'Начать игру' : 'Начать заново'}
					</button>
				}
			</div>
			<EndGameModal
				open={openEndGameModal}
				restart={restartGame}
				time={totalTime}
				inLesson={props.inLesson}
				isLastFragment={props.isLastFragmentInLesson}
				toNextFragment={props.toNextFragment}
			/>
		</div>
	)
}

export default GraphDictation
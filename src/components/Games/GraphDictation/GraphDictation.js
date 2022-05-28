import React, {useEffect, useRef, useState} from 'react'
import s from './GraphDictation.module.css'
import {clearCanvas, drawGrid, redrawPicture} from "./gameFunctions";
import {successNotification, wrongGameNotification} from "../../../notifications/notifications";


const GraphDictation = ({height, width, cellSize, pointSize, color, lineWidth, ...props}) => {
	const [ctx, setCtx] = useState(null)
	const [picState, setPicState] = useState([])
	const [picture, setPicture] = useState(props.picture)
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

	// Проверяет рисунок с эталонным
	useEffect(() => {
		if (props.picture && !picture.length) {
			successNotification('Отличная работа!')
		}
	}, [picState])

	// Добавляет точку к изображению
	const addPointToPicState = (point) => {
		if (props.picture) {
			const pictureCopy = picture
			const first = pictureCopy.shift()
			if (point.x !== first.x || point.y !== first.y) {
				wrongGameNotification()
			} else {
				setPicState([...picState, point])
				setPicture(pictureCopy)
			}
		} else {
			setPicState([...picState, point])
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

	return (
		<div className={s.wrapper}>
			<div className={s.canvasWrapper} style={{height: height * cellSize + 'px'}}>
				<canvas id='graphic_dictation' ref={can}/>
				{points.map(point => {
					return (
						<div
							onClick={() => addPointToPicState(point)}
							className={s.point}
							style={{
								top: point.y * cellSize - pointSize / 2 + 'px',
								left: point.x * cellSize - pointSize / 2 + 'px',
								width: pointSize,
								height: pointSize,
							}}
							key={point.x + '_' + point.y}
							onMouseEnter={e => setBackgroundColorOnHover(e, color)}
							onMouseLeave={e => setBackgroundColorOnHover(e, '')}
						/>
					)
				})}
			</div>
			<div className={s.buttons}>
				{!!picState.length &&
					<>
						<button className='btn' onClick={clear}>Очистить</button>
						<button className='btn' onClick={undo}>Отменить</button>
					</>
				}
			</div>
		</div>
	)
}

export default GraphDictation
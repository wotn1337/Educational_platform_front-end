import React, {useState} from 'react'
import s from './Puzzle.module.css'
import {JigsawPuzzle} from "react-jigsaw-puzzle";
import 'react-jigsaw-puzzle/lib/jigsaw-puzzle.css'
import './custom_puzzle_style.css'
import EndGameModal from "../EndGameModal/EndGameModal";


const Puzzle = ({image, rows, cols, inLesson, isLastFragmentInLesson, toNextFragment}) => {
	const [inGame, setInGame] = useState(false)
	const [startTime, setStartTime] = useState(new Date().getTime())
	const [totalTime, setTotalTime] = useState(new Date().getTime())
	const [openEndGameModal, setOpenEndGameModal] = useState(false)

	const startGame = () => {
		setInGame(true)
		setStartTime(new Date().getTime())
	}

	const finishGame = () => {
		setTotalTime(new Date().getTime() - startTime)
		setOpenEndGameModal(true)
	}

	const restartGame = () => {
		setInGame(false)
		setOpenEndGameModal(false)
	}

	return (
		<>
			{inGame && <ImageExample src={image}/>}
			{inGame
				? <div className={s.puzzleWrapper}>
					<JigsawPuzzle
						imageSrc={image}
						rows={rows}
						columns={cols}
						onSolved={finishGame}
					/>
				</div>
				: <img className={s.preview} src={image} alt='preview'/>
			}
			<div className={s.buttons}>
				<button className='btn' onClick={inGame ? restartGame : startGame}>
					{inGame ? 'Начать заново' : 'Начать игру'}
				</button>
			</div>
			<EndGameModal
				open={openEndGameModal}
				restart={restartGame}
				time={totalTime}
				inLesson={inLesson}
				isLastFragment={isLastFragmentInLesson}
				toNextFragment={toNextFragment}
			/>
		</>
	)
}

const ImageExample = ({src}) => {
	return (
		<div className={s.imageExampleWrapper}>
			<img src={src} alt="example" className={s.imageExample}/>
		</div>
	)
}

// const PuzzleDroppable = ({cols, rows, iw, ih, pw, ph, pieces, imageSrc}) => {
// 	return (
// 		<Droppable droppableId={'puzzle'}>
// 			{provided => (
// 				<div
// 					className={s.puzzle}
// 					{...provided.droppableProps}
// 					ref={provided.innerRef}
// 					style={{
// 						gridTemplateColumns: `repeat(${cols}, ${pw}px)`,
// 						gridTemplateRows: `repeat(${rows}, ${ph}px)`
// 					}}
// 				>
// 					{pieces.map((piece, index) => (
// 						<PuzzlePiece
// 							imageSrc={imageSrc}
// 							x={piece[0]} y={piece[1]}
// 							iw={iw} ih={ih}
// 							pw={pw} ph={ph}
// 							key={`${piece[0]}_${piece[1]}`}
// 							id={`${piece[0]}_${piece[1]}`}
// 							index={index}
// 						/>
// 					))}
// 					{provided.placeholder}
// 				</div>
// 			)}
// 		</Droppable>
// 	)
// }
//
// const PuzzlePiece = ({x, y, pw, ph, iw, ih, imageSrc, id, index}) => {
// 	return (
// 		<Draggable draggableId={id} index={index} key={id}>
// 			{provided => (
// 				<div
// 					className={s.puzzlePiece}
// 					{...provided.draggableProps}
// 					{...provided.dragHandleProps}
// 					ref={provided.innerRef}
// 					style={{
// 						backgroundImage: `url("${imageSrc}")`,
// 						width: pw,
// 						height: ph,
// 						backgroundPositionX: `${iw - x * pw}px`,
// 						backgroundPositionY: `${ih - y * ph}px`,
// 					}}
// 				/>
// 			)}
// 		</Draggable>
// 	)
// }

export default Puzzle
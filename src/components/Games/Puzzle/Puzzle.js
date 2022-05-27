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

export default Puzzle
import React from 'react'
import s from './GameButton.module.css'


const StartGameButton = ({handleClick, text}) => {
	return (
		<button
			onClick={handleClick}
			className={`${s.button} ${s.start}`}
		>
			{text || 'Начать игру'}
		</button>
	)
}

export default StartGameButton
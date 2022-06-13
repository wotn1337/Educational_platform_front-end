import React from 'react'
import s from './GameButton.module.css'
import restart from '../../../assets/img/games/restart.svg'


const RestartGameButton = ({restartGame}) => {
	return (
		<button onClick={restartGame} className={`${s.button} ${s.restart}`}>
			<img src={restart} alt="circle arrow" className={s.arrow}/>
			<span>Начать заново</span>
		</button>
	)
}

export default RestartGameButton
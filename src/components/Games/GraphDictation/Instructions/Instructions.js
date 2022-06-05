import React from 'react'
import {createInstrucionsList} from "../gameFunctions";
import s from './Instructions.module.css'


const Instructions = ({points, current}) => {
	return (
		<div className={s.instructionsWrapper}>
			<ul className={s.instructionList}>
				{createInstrucionsList(points).map((instruction, index) => {
					const additionalClass = index === current
						? s.current
						: index < current ? s.prev : s.next
					return <li
						key={index}
						className={`${s.instruction} ${additionalClass}`}
					>{instruction}</li>
				})}
			</ul>
		</div>
	)
}

export default Instructions
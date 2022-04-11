import React, {useEffect} from 'react';
import s from './EndGameModal.module.css';
import Modal from "react-modal";


const EndGameModal = ({open, restart, time, inLesson, isLastFragment, toNextFragment}) => {
	useEffect(() => {
		if (open) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}
	}, [open])

	const toNextFragmentInLesson = () => {
		restart()
		toNextFragment()
		document.body.style.overflow = 'unset';
	}

	return (
		<Modal
			isOpen={open}
			className={s.endGameModal}
			overlayClassName={s.endGameOverlay}
			onRequestClose={restart}
		>
			<div className={s.modalInner}>
				<h3 className={s.modalHeader}>Отличная работа!</h3>
				<div className={s.timeBlock}>
					<span>Вы справились за</span>
					<span className={s.time}>{getTimeString(time)}</span>
				</div>
				<div className={s.modalButtons}>
					<button className={`btn ${s.endGameModalButton}`} onClick={restart}>Пройти еще раз</button>
					{inLesson && !isLastFragment &&
						<button
							className={`btn ${s.endGameModalButton}`}
							onClick={toNextFragmentInLesson}
						>
							Перейти к следующему заданию
						</button>
					}
				</div>
			</div>
		</Modal>
	);
};

// Получает кол-во миллисекунд и возвращает строку в формате "XX часов XX минут XX секунд"
const getTimeString = (milliseconds) => {
	let seconds = Math.floor(milliseconds / 1000)
	const hours = Math.floor(seconds / 3600)
	seconds %= 3600
	const minutes = Math.floor(seconds / 60)
	seconds %= 60

	const hoursString = hours ? `${hours} ${rightHours(hours)}` : ''
	const minutesString = minutes ? `${minutes} ${rightMinutes(minutes)}` : ''
	const secondsString = seconds ? `${seconds} ${rightSeconds(seconds)}` : ''

	return `${hoursString} ${minutesString} ${secondsString}`.trim()
}

// Возвращает слово "час" в нужном падеже, в зависимости от кол-ва
const rightHours = (count) => {
	const twoLastNumbers = count % 100;
	const lastNumber = count % 10;

	if (lastNumber === 1 && twoLastNumbers !== 11)
		return "час";
	else if (lastNumber >= 2 && lastNumber <= 4 && twoLastNumbers !== 12 && twoLastNumbers !== 13 && twoLastNumbers !== 14)
		return "часа";
	else return "часов";
}

// Возвращает слово "минута" в нужном падеже, в зависимости от кол-ва
const rightMinutes = (count) => {
	const twoLastNumbers = count % 100;
	const lastNumber = count % 10;

	if (lastNumber === 1 && twoLastNumbers !== 11)
		return "минуту";
	else if (lastNumber >= 2 && lastNumber <= 4 && twoLastNumbers !== 12 && twoLastNumbers !== 13 && twoLastNumbers !== 14)
		return "минуты";
	else return "минут";
}

// Возвращает слово "секунда" в нужном падеже, в зависимости от кол-ва
const rightSeconds = (count) => {
	const twoLastNumbers = count % 100;
	const lastNumber = count % 10;

	if (lastNumber === 1 && twoLastNumbers !== 11)
		return "секунду";
	else if (lastNumber >= 2 && lastNumber <= 4 && twoLastNumbers !== 12 && twoLastNumbers !== 13 && twoLastNumbers !== 14)
		return "секунды";
	else return "секунд";
}

export default EndGameModal;
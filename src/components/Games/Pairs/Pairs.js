import React, {useEffect, useState} from 'react';
import s from './Pairs.module.css';
import {v1 as uuid} from "uuid";
import {compose} from "redux";
import {connect} from "react-redux";
import {Transition} from "react-transition-group";
import Modal from 'react-modal';
import taskAudio from '../Audio/Pairs/task.ogg'
import {soundTask} from "../Audio/soundTask";


const Pairs = ({images, task}) => {
	const [inGame, setInGame] = useState(false)
	const [cards, setCards] = useState(createCardsArray(images))
	const [pair, setPair] = useState([])
	const [pairCount, setPairCount] = useState(0)
	const [openEndGameModal, setOpenEndGameModal] = useState(false)
	const [isChecking, setIsChecking] = useState(false)
	const [startTime, setStartTime] = useState(0)
	const [totalTime, setTotalTime] = useState(0)

	// Проверка пары на соответствие
	useEffect(() => {
		if (pair.length === 2) {
			setIsChecking(true)
			const isPair = pair[0] === pair[1]
			const index = pair[0]
			if (isPair) {
				setTimeout(() => {
					setCards(cards.map(card => {
						if (card.pairIndex === index) {
							return {...card, finished: true}
						}
						return card
					}))
					setIsChecking(false)
				}, 700)
				setPairCount(pairCount + 1)
			} else {
				setTimeout(() => {
					setCards(cards.map(card => {
						if (!card.finished) {
							return {...card, rotated: true}
						}
						return card
					}))
					setIsChecking(false)
				}, 1000)
			}
			setPair([])
		}
	}, [pair])

	// Открывает модальное окно завершения игры
	useEffect(() => {
		if (pairCount === images.length) {
			setTotalTime(new Date().getTime() - startTime)
			setTimeout(() => {
				setOpenEndGameModal(true)
			}, 1500)
		}
	}, [pairCount])

	// Запускает игру
	const startGame = () => {
		setInGame(true)
		setStartTime(new Date().getTime())
		rotateAllCards()
	}

	// Перезапускает игру
	const restartGame = () => {
		setInGame(false)
		setCards(createCardsArray(images))
		setPair([])
		setPairCount(0)
		setOpenEndGameModal(false)
	}

	// Переворачивает все карточки рубашкой вверх
	const rotateAllCards = () => {
		setCards(cards.map(card => ({...card, rotated: true})))
	}

	// Переворачивает карточку с переданным id лицевой стороной вверх
	const rotateCardToFront = (id) => {
		setCards(cards.map(card => {
			if (card.id === id) {
				return {...card, rotated: false}
			}
			return card
		}))
	}

	// Обработчик клика по карточке
	const onCardClick = (card) => {
		if (inGame && !card.finished && card.rotated && !isChecking) {
			rotateCardToFront(card.id)
			setPair([...pair, card.pairIndex])
		}
	}

	const cardsBlocks = cards.map(card => (
		<Card
			image={card.image}
			key={card.id}
			rotated={card.rotated}
			rotateCard={() => onCardClick(card)}
			finished={card.finished}
		/>
	))

	return (
		<section className={'content'}>
			<div className={s.taskBlock}>
				<button className={s.soundButton} onClick={() => soundTask(taskAudio)}/>
				<p className={s.task}>{task}</p>
			</div>
			<section
				className={s.cards}
				style={{gridTemplateColumns: `repeat(${getColumnsCount(images.length)}, 200px)`}}
			>
				{cardsBlocks}
			</section>
			<div className={s.progressBarContainer}>
				<div className={s.progressBar} style={{
					width: `${pairCount / images.length * 100}%`,
					backgroundColor: getProgressBarColor(pairCount / images.length * 100)
				}}/>
			</div>
			<div className={s.button}>
				<button
					className={'btn'}
					onClick={inGame ? restartGame : startGame}
				>
					{inGame ? 'Начать заново' : 'Начать игру'}
				</button>
			</div>
			<Modal
				isOpen={openEndGameModal}
				className={s.endGameModal}
				overlayClassName={s.endGameOverlay}
				onRequestClose={restartGame}
			>
				<div className={s.modalInner}>
					<h3 className={s.modalHeader}>Отличная работа!</h3>
					<div className={s.timeBlock}>
						<span>Вы справились за</span>
						<span className={s.time}>{getTimeString(totalTime)}</span>
					</div>
					<div className={s.modalButtons}>
						<button className={'btn'} onClick={restartGame}>Пройти еще раз</button>
					</div>
				</div>
			</Modal>
		</section>
	);
};

// Состояния анимации для карточек
const transitionStyles = {
	entering: {transform: 'scale(0.5)'},
	entered: {opacity: 0},
	exiting: {opacity: 0},
	exited: {opacity: 1},
};

const Card = ({image, rotated, rotateCard, finished}) => {
	return (
		<Transition in={finished} timeout={500}>
			{state => (
				<div
					className={`${s.card} ${rotated ? s.rotated : ''} ${finished ? s.finished : ''}`}
					onClick={rotateCard}
					style={{...transitionStyles[state]}}
				>
					<img className={s.cardImage} src={image} alt="card"/>
				</div>
			)}
		</Transition>
	)
}

// Возвращает перемешанный массив карточек
const createCardsArray = (images) => {
	const cards = []

	// Генерирует массив карточек с парными картинками
	images.forEach((image, index) => {
		const cardTemp = {
			image,
			pairIndex: index,
			rotated: false,
			finished: false
		}
		const card1 = {...cardTemp, id: uuid()}
		const card2 = {...cardTemp, id: uuid()}
		cards.push(card1, card2)
	})

	return shuffleArray(cards)
}

// Возвращает массив, перемешанный в случайном порядке
const shuffleArray = (array) => {
	const tempArray = [...array]
	tempArray.sort(() => Math.random() - 0.5)
	return tempArray
}

// Рассчитывает кол-во колонок в сетке карточек в зависимости от кол-ва изображений
const getColumnsCount = (imagesCount) => {
	if ((imagesCount < 8 && imagesCount !== 6) || imagesCount === 11) {
		return imagesCount
	}
	if (imagesCount === 8 || imagesCount === 6) return 4
	if (imagesCount === 9 || imagesCount === 12) return 6
	if (imagesCount === 10) return 5
}

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

// Возвращает цвет прогресс-бара в зависимости от процента угаданных пар
const getProgressBarColor = (percent) => {
	if (percent <= 33) {
		return 'orange'
	} else if (percent <= 66) {
		return 'yellow'
	} else {
		return 'green'
	}
}

const mapStateToProps = (state) => ({
	images: state.pairs.images,
	task: state.pairs.task
});

export default compose(
	connect(mapStateToProps),
)(Pairs)

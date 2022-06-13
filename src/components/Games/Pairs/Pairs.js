import React, {useEffect, useState} from 'react';
import s from './Pairs.module.css';
import {v1 as uuid} from "uuid";
import {Transition} from "react-transition-group";
import EndGameModal from "../EndGameModal/EndGameModal";
import Card from "../GameCard/Card";
import {shuffleArray} from "../../../common/helpers";
import StartGameButton from "../Buttons/StartGameButton";
import RestartGameButton from "../Buttons/RestartGameButton";


const Pairs = ({images, size = 200, inLesson, isLastFragmentInLesson, toNextFragment}) => {
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
	}

	// Перезапускает игру
	const restartGame = () => {
		setInGame(false)
		setCards(createCardsArray(images))
		setPair([])
		setPairCount(0)
		setOpenEndGameModal(false)
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
		<TransitionCard
			image={card.image}
			key={card.id}
			rotated={card.rotated}
			rotateCard={() => onCardClick(card)}
			finished={card.finished}
			size={size}
		/>
	))

	return (
		<>
			<section
				className={s.cards}
				style={{gridTemplateColumns: `repeat(${getColumnsCount(images.length)}, ${size}px)`}}
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
				{!inGame
					? <StartGameButton handleClick={startGame}/>
					: <RestartGameButton restartGame={restartGame}/>
				}
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
	);
};

// Состояния анимации для карточек
const transitionStyles = {
	entering: {opacity: 1, transform: 'scale(0.1)'},
	entered: {opacity: 0, transform: 'scale(0.1)'},
	exiting: {opacity: 1, transform: 'scale(0.1)'},
	exited: {opacity: 1},
};

const TransitionCard = ({image, rotated, rotateCard, finished, size}) => {
	return (
		<Transition in={finished} timeout={500}>
			{state => (
				<Card
					image={image}
					rotated={rotated}
					rotateCard={rotateCard}
					finished={finished}
					size={size}
					style={transitionStyles[state]}
				/>
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
			image: image.url,
			pairIndex: index,
			rotated: true,
			finished: false
		}
		const card1 = {...cardTemp, id: uuid()}
		const card2 = {...cardTemp, id: uuid()}
		cards.push(card1, card2)
	})

	return shuffleArray(cards)
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

export default Pairs

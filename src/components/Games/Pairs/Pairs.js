import React, {useEffect, useState} from 'react';
import s from './Pairs.module.css';
import {v1 as uuid} from "uuid";
import {compose} from "redux";
import {connect} from "react-redux";
import {Transition} from "react-transition-group";
import Modal from 'react-modal';


const Pairs = ({images}) => {
	const [inGame, setInGame] = useState(false)
	const [cards, setCards] = useState(createCardsArray(images))
	const [pair, setPair] = useState([])
	const [pairCount, setPairCount] = useState(0)
	const [openEndGameModal, setOpenEndGameModal] = useState(false)

	// Проверка пары на соответствие
	useEffect(() => {
		if (pair.length === 2) {
			const isPair = pair[0] === pair[1]
			const index = pair[0]
			if (isPair) {
				setTimeout(() => setCards(cards.map(card => {
					if (card.pairIndex === index) {
						return {...card, finished: true}
					}
					return card
				})), 700)
				setPairCount(pairCount + 1)
			} else {
				setTimeout(() => setCards(cards.map(card => {
					if (!card.finished) {
						return {...card, rotated: true}
					}
					return card
				})), 1000)
			}
			setPair([])
		}
	}, [pair])

	useEffect(() => {
		if (pairCount === images.length) {
			setTimeout(() => {
				setOpenEndGameModal(true)
			}, 1500)
		}
	}, [pairCount])

	const startGame = () => {
		setInGame(true)
		rotateAllCards()
	}

	const restartGame = () => {
		setInGame(false)
		setCards(createCardsArray(images))
		setPair([])
		setPairCount(0)
		setOpenEndGameModal(false)
	}

	const rotateAllCards = () => {
		setCards(cards.map(card => ({...card, rotated: true})))
	}

	const rotateCardToFront = (targetCard) => {
		setCards(cards.map(card => {
			if (card.id === targetCard.id) {
				return {...card, rotated: false}
			}
			return card
		}))
	}

	const onCardClick = (card) => {
		if (inGame && !card.finished && card.rotated) {
			rotateCardToFront(card)
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
			<section className={s.cards}>{cardsBlocks}</section>
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
	entering: { transform: 'scale(0.5)' },
	entered:  { opacity: 0 },
	exiting:  { transform: 'scale(0.5)' },
	exited:  { opacity: 1 },
};

const Card = ({image, rotated, rotateCard, finished}) => {
	return (
		<Transition in={finished} timeout={500}>
			{state => (
				<div
					className={`${s.card} ${rotated ? s.rotated : ''} ${finished ? s.finished : ''}`}
					onClick={rotateCard}
					style={{
						...transitionStyles[state]
					}}
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

// Перемешивает массив в случайном порядке
const shuffleArray = (array) => {
	const tempArray = [...array]
	tempArray.sort(() => Math.random() - 0.5)
	return tempArray
}

const mapStateToProps = (state) => ({
	images: state.pairs.images
});

export default compose(
	connect(mapStateToProps),
)(Pairs)

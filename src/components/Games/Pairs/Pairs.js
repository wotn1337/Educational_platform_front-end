import React, {useState} from 'react';
import s from './Pairs.module.css';
import {v1 as uuid} from "uuid";
import {compose} from "redux";
import {connect} from "react-redux";


const Pairs = ({images}) => {
	const [inGame, setInGame] = useState(false)
	const [cards, setCards] = useState(createCardsArray(images))
	const [chosen, setChosen] = useState(undefined)

	const startGame = () => {
		setInGame(true)
		rotateAllCards()
	}

	const restartGame = () => {
		setInGame(false)
		setCards(createCardsArray(images))
		setChosen(undefined)
	}

	const rotateAllCards = () => {
		setCards(cards.map(card => ({...card, rotated: true})))
	}

	const rotateCardToFront = (targetCard) => {
		const isChosen = chosen?.id === targetCard.id
		if (!isChosen) {
			setCards(cards.map(card => {
				if (card.id === targetCard.id || (targetCard.pairIndex === chosen?.pairIndex && card.id === chosen?.id)) {
					return {...card, rotated: false, finished: card.pairIndex === chosen?.pairIndex}
				}
				return card
			}))
		}
	}

	const onCardClick = (card) => {
		if (inGame && !card.finished) {
			if (!chosen) {
				setChosen(card)
			} else  {
				setChosen(undefined)
			}
			rotateCardToFront(card)
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
		</section>
	);
};

const Card = ({image, rotated, rotateCard, finished}) => {
	return (
		<div
			className={`${s.card} ${rotated ? s.rotated : ''}`}
			onClick={rotateCard}
		>
			{finished && <div className={s.finished}/>}
			<img className={s.cardImage} src={image} alt="card"/>
		</div>
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

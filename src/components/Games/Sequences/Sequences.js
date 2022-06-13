import React, {useEffect, useState} from 'react';
import s from './Sequences.module.css';
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";
import Card from "../GameCard/Card";
import {shuffleArray} from "../../../common/helpers";
import EndGameModal from "../EndGameModal/EndGameModal";
import {wrongGameNotification} from "../../../notifications/notifications";
import StartGameButton from "../Buttons/StartGameButton";
import RestartGameButton from "../Buttons/RestartGameButton";

const createImagesState = (images) => {
	const result = {
		images: {},
		sequence: [],
		dragIds: [],
	}

	images.forEach(image => {
		const id = image.id.toString()
		result.images = {
			...result.images,
			[id]: {id, src: image.url},
		}

		result.sequence = [...result.sequence, id]
	})

	result.dragIds = shuffleArray(result.sequence)
	return result
}


const Sequences = ({images, size, inLesson, isLastFragmentInLesson, toNextFragment}) => {
	const [imagesState, setImagesState] = useState(createImagesState(images))
	const [inGame, setInGame] = useState(false)
	const [isRightSequence, setIsRightSequence] = useState(false)
	const [openEndGameModal, setOpenEndGameModal] = useState(false)
	const [startTime, setStartTime] = useState(new Date())
	const [totalTime, setTotalTime] = useState(new Date().getTime())

	useEffect(() => {
		if (isRightSequence) {
			setTotalTime(new Date().getTime() - startTime)
			setOpenEndGameModal(true)
		}
	}, [isRightSequence])

	const startGame = () => {
		setStartTime(new Date())
		setInGame(true)
		setIsRightSequence(false)
	}

	const restartGame = () => {
		setInGame(false)
		setOpenEndGameModal(false)
		setIsRightSequence(false)
		setImagesState(createImagesState(images))
	}

	const checkSequence = () => {
		for (let i = 0; i < images.length; i++) {
			if (imagesState.sequence[i] !== imagesState.dragIds[i]) {
				setIsRightSequence(false)
				wrongGameNotification('Некоторые карточки не на своих местах, попробуй поставить по-другому')
				return
			}
		}
		setIsRightSequence(true)
	}

	const onDragEnd = result => {
		const {destination, source, draggableId} = result

		// Если нет конечного места, оставить все без изменений
		if (!destination) return

		// Если начальное и конечное место и порядковые индексы совпадают, оставить все без изменений
		if (destination.droppableId === source.droppableId && destination.index === source.index)
			return

		// Если перемещение происходит в рамках изначального положения карточек
		if (source.droppableId === destination.droppableId && destination.droppableId === 'initPlace') {
			const newDragIds = [...imagesState.dragIds]
			newDragIds.splice(source.index, 1)
			newDragIds.splice(destination.index, 0, draggableId)

			setImagesState({
				...imagesState,
				dragIds: newDragIds
			})
		}
	}

	return (
		<>
			<DragDropContext onDragEnd={onDragEnd}>
				<DraggableCards size={size} imagesState={imagesState} inGame={inGame}/>
			</DragDropContext>
			<div className={s.buttonBlock}>
				{inGame && <StartGameButton handleClick={checkSequence} text='Проверить последовательность'/>}
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

const DraggableCards = ({imagesState, size, inGame}) => {
	return (
		<Droppable droppableId={'initPlace'} direction='horizontal'>
			{provided => (
				<div className={s.draggableCards} ref={provided.innerRef}>
					{imagesState.dragIds.map((imageId, index) => {
							return <DraggableCard
								image={imagesState.images[imageId].src}
								id={imageId}
								index={index}
								size={size}
								key={imageId}
								inGame={inGame}
							/>
						}
					)}
					{provided.placeholder}
				</div>
			)}
		</Droppable>
	)
}

const DraggableCard = ({id, index, size, image, inGame}) => {
	return (
		<Draggable draggableId={id.toString()} index={index} key={id} isDragDisabled={!inGame}>
			{(provided) => (
				<Card
					size={size}
					image={image}
					innerRef={provided.innerRef}
					finished={!inGame}
					{...provided.draggableProps}
					{...provided.dragHandleProps}
				/>
			)}
		</Draggable>
	)
}


export default Sequences;
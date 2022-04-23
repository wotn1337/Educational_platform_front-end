import React, {useEffect, useState} from 'react';
import s from './Sequences.module.css';
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";
import {v4 as uuid} from 'uuid'
import Card from "../GameCard/Card";
import {shuffleArray} from "../../../common/helpers";
import EndGameModal from "../EndGameModal/EndGameModal";
import {wrongGameNotification} from "../../../notifications/notifications";
import Task from "../Task/Task";

// const images = [
// 	'https://klike.net/uploads/posts/2019-06/1560329641_2.jpg', //кися
// 	'https://www.iguides.ru/upload/medialibrary/9f8/9f8fdff471b7d281f81f694c100b5adc.png', // обезьяна
// 	'https://klike.net/uploads/posts/2021-01/1611131113_2.jpg', //дом
// 	'http://sun9-9.userapi.com/c4384/g37962418/a_86cad53d.jpg' // кот в сапогах
// ]

const createImagesState = (images) => {
	const result = {
		images: {},
		sequence: [],
		dragIds: [],
	}

	images.forEach(image => {
		const id = uuid()
		result.images = {
			...result.images,
			[id]: {id, src: image},
		}

		result.sequence = [...result.sequence, id]
	})

	result.dragIds = shuffleArray(result.sequence)
	return result
}


const Sequences = ({images, size, task, inLesson, isLastFragmentInLesson, toNextFragment}) => {
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
			<Task task={task} />
			<DragDropContext onDragEnd={onDragEnd}>
				<DraggableCards size={size} imagesState={imagesState} inGame={inGame}/>
			</DragDropContext>
			<div className={s.buttonBlock}>
				{inGame &&
					<button
						className='btn'
						onClick={checkSequence}
						style={{
							width: 'auto',
							minWidth: '210px',
							maxWidth: '250px'
						}}
					>Проверить последовательность</button>
				}
				<button
					className={`btn`}
					onClick={inGame ? restartGame : startGame}
				>
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
		<Draggable draggableId={id} index={index} key={id} isDragDisabled={!inGame}>
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

// const DroppableCards = ({imagesState, size}) => {
// 	return (
// 		<div className={s.droppableCards}>
// 			{Object.keys(imagesState.dropIds).map((dropId, index) => (
// 				<DroppableCard
// 					size={size}
// 					id={dropId}
// 					number={index + 1}
// 					key={dropId}
// 					image={imagesState.dropIds[dropId].image}
// 				/>
// 			))}
// 		</div>
// 	)
// }
//
// const DroppableCard = ({number, id, size, image}) => {
// 	return (
// 		<Droppable droppableId={id} key={id}>
// 			{provided => (
// 				<DroppableCardInner
// 					number={number}
// 					innerRef={provided.innerRef}
// 					size={size}
// 					image={image}
// 					{...provided.droppableProps}
// 				>
// 					{provided.placeholder}
// 				</DroppableCardInner>
// 			)}
// 		</Droppable>
// 	)
// }
//
// const DroppableCardInner = ({number, innerRef, size, image, children, ...props}) => {
// 	return (
// 		<div
// 			className={s.dropCardInner}
// 			ref={innerRef}
// 			{...props}
// 			style={{
// 				width: size,
// 				height: size
// 			}}
// 		>
// 			{
// 				image
// 					? <Card size={size} image={image} finished={true}/>
// 					: number
// 			}
// 			{children}
// 		</div>
// 	)
// }

export default Sequences;
import React, {useEffect, useState} from 'react';
import s from './Associations.module.css';
import {v4 as uuid} from 'uuid'
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";
import Card from "../GameCard/Card";
import {wrongGameNotification} from "../../../notifications/notifications";
import EndGameModal from "../EndGameModal/EndGameModal";
import {shuffleArray} from "../../../common/helpers";
import Task from "../Task/Task";

const createInitImagesObject = (initImages) => {
	const result = {
		images: {},
		topIds: [],
		downIds: [],
	}

	initImages.forEach((imagePair) => {
		const id1 = uuid()
		const id2 = uuid()
		result.images = {
			...result.images,
			[id1]: {id: id1, src: imagePair[0], pair: undefined, rightPair: id2},
			[id2]: {id: id2, src: imagePair[1]}
		}
		result.topIds = [...result.topIds, id1]
		result.downIds = [...result.downIds, id2]
	})

	result.topIds = shuffleArray(result.topIds)
	result.downIds = shuffleArray(result.downIds)
	return result
}


const Associations = ({images, cardSize = 200, task, inLesson, isLastFragmentInLesson, toNextFragment}) => {
	const [imagesState, setImagesState] = useState(createInitImagesObject(images))
	const [inGame, setInGame] = useState(false)
	const [associationsCount, setAssociationsCount] = useState(0)
	const [openEndGameModal, setOpenEndGameModal] = useState(false)
	const [startTime, setStartTime] = useState(new Date())
	const [totalTime, setTotalTime] = useState(new Date().getTime())

	useEffect(() => {
		if (associationsCount === images.length) {
			setTotalTime(new Date().getTime() - startTime)
			setTimeout(() => {
				setOpenEndGameModal(true)
			}, 500)
		}
	}, [associationsCount])

	const startGame = () => {
		setInGame(true)
		setStartTime(new Date())
		setAssociationsCount(0)
	}

	const restartGame = () => {
		setInGame(false)
		setImagesState(createInitImagesObject(images))
		setOpenEndGameModal(false)
		setAssociationsCount(0)
	}

	const onDragEnd = result => {
		const {destination, source, draggableId} = result

		// Если нет конечного места, оставить все без изменений
		if (!destination) return

		// Если начальное и конечное место и порядковые индексы совпадают, оставить все без изменений
		if (destination.droppableId === source.droppableId &&
			destination.index === source.index)
			return

		// Если перемещение происходит в рамках изначального положения карточек
		if (source.droppableId === destination.droppableId && destination.droppableId === 'initPlace') {
			return
		}

		// Если карточку перемешают из начального положения наверх
		if (source.droppableId === 'initPlace') {
			const finish = {...imagesState.images[destination.droppableId]}

			// Если в конечном положении уже есть карточка, оставить все без изменений
			if (finish.pair)
				return

			// Если ассоциация неверная, оставить все без изменений и показать уведомление
			if (draggableId !== finish.rightPair) {
				wrongGameNotification()
				return
			}

			const newDownIds = [...imagesState.downIds]
			newDownIds.splice(source.index, 1)
			finish.pair = draggableId

			setImagesState({
				...imagesState,
				images: {
					...imagesState.images,
					[destination.droppableId]: finish
				},
				downIds: newDownIds,
			})
			setAssociationsCount(associationsCount + 1)
		}
	}

	return (
		<>
			<Task task={task} />
			<DragDropContext onDragEnd={onDragEnd}>
				<section className={s.cards}>
					<TopCards imagesState={imagesState} cardSize={cardSize}/>
					<DownCards id={'initPlace'} imagesState={imagesState} cardSize={cardSize} disableDrag={!inGame}/>
				</section>
			</DragDropContext>
			<div className={s.buttonBlock}>
				<button className={`btn`}
				        onClick={inGame ? restartGame : startGame}>{inGame ? 'Начать заново' : 'Начать игру'}</button>
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
	)
}

const DraggableCard = ({id, index, image, size, disableDrag}) => {
	return (
		<Draggable draggableId={id} index={index} key={id} isDragDisabled={disableDrag}>
			{(provided) => (
				<Card
					size={size}
					image={image}
					{...provided.draggableProps}
					{...provided.dragHandleProps}
					innerRef={provided.innerRef}
					finished={disableDrag}
				/>
			)}
		</Draggable>
	)
}

const DroppableCard = ({id, image, size, pairId, pairImage}) => {
	return (
		<Droppable droppableId={id} isDropDisabled={!!pairId}>
			{(provided, snapshot) => (
				<div
					className={s.dropPlace}
					{...provided.droppableProps}
					ref={provided.innerRef}
					style={{
						width: size,
						height: size,
					}}
				>
					<Card
						size={size}
						image={image}
						finished={true}
						isAssociations={true}
						style={{
							boxShadow: snapshot.isDraggingOver ? '0px 0px 20px 5px rgba(243, 106, 118, 0.7)' : 'none',
							top: !!pairId ? '30%' : '',
							left: !!pairId ? '70%' : '',
							transition: '300ms'
					}}
					/>
					{pairId &&
						<DraggableCard
							id={pairId}
							size={size}
							image={pairImage}
							index={0}
						/>
					}
					{provided.placeholder}
				</div>
			)}
		</Droppable>
	)
}

const TopCards = ({imagesState, cardSize}) => {
	return (
		<div className={s.topCards}>
			{imagesState.topIds.map(imageId => (
				<DroppableCard
					id={imageId}
					image={imagesState.images[imageId].src}
					key={imageId}
					size={cardSize}
					pairId={imagesState.images[imageId].pair}
					pairImage={imagesState.images[imagesState.images[imageId].pair]?.src}
				/>
			))}
		</div>
	)
}

const DownCards = ({id, imagesState, cardSize, disableDrag}) => {
	return (
		<Droppable droppableId={id} direction='horizontal'>
			{provided => (
				<div className={`${s.dropPlace} ${s.downCards}`} {...provided.droppableProps} ref={provided.innerRef}>
					{imagesState.downIds.map((imageId, index) => (
						<DraggableCard
							id={imageId}
							image={imagesState.images[imageId].src}
							index={index}
							key={imageId}
							size={cardSize}
							disableDrag={disableDrag}
						/>
					))}
					{provided.placeholder}
				</div>
			)}
		</Droppable>
	)
}

export default Associations
import React from 'react'
import Pairs from "../Pairs/Pairs";
import PairsCreateContainer from "../../CreateGame/Pairs/PairsCreateContainer";
import Associations from "../Associations/Associations";
import AssociationsCreateContainer from "../../CreateGame/Associations/AssociationsCreateContainer";
import Sequences from "../Sequences/Sequences";
import SequenceCreateContainer from "../../CreateGame/Sequence/SequenceCreateContainer";
import Task from "../Task/Task";

const gameTypes = {
	pairs: 'pairs',
	associations: 'matchmaking',
	sequences: 'sequences',
	puzzle: 'puzzle'
}

const GameContainer = ({isEdit, content, cardSize, inLesson, isLastFragmentInLesson, toNextFragment, ...props}) => {
	return (
		<>
			<Task task={content.task.text} taskAudio={content.task.media}/>
			<Game
				isEdit={isEdit}
				content={content}
				cardSize={cardSize}
				inLesson={inLesson}
				isLastFragmentInLesson={isLastFragmentInLesson}
				toNextFragment={toNextFragment}
				{...props}
			/>
		</>
	)
}

const Game = ({isEdit, content, cardSize, inLesson, isLastFragmentInLesson, toNextFragment, ...props}) => {
	switch (content.gameType) {
		case gameTypes.pairs:
			return (
				<>
					{!isEdit
						? <Pairs
							images={content.images}
							size={cardSize}
							inLesson={inLesson}
							isLastFragmentInLesson={isLastFragmentInLesson}
							toNextFragment={toNextFragment}
						/>
						: <PairsCreateContainer setContent={props.setContent}
						                        isEdit={isEdit}
						                        oldLinks={props.oldLinks}
						                        content={content}
						                        deleteImage={props.deleteImage}
						/>
					}
				</>
			)

		case gameTypes.associations:
			return (
				<>
					{!isEdit
						? <Associations
							images={content.images}
							cardSize={cardSize}
							inLesson={inLesson}
							isLastFragmentInLesson={isLastFragmentInLesson}
							toNextFragment={toNextFragment}
						/>
						: <AssociationsCreateContainer setContent={props.setContent} isEdit={isEdit}/>
					}
				</>
			)

		case gameTypes.sequences:
			return (
				<>
					{!isEdit
						? <Sequences
							size={cardSize}
							images={content.images}
							inLesson={inLesson}
							isLastFragmentInLesson={isLastFragmentInLesson}
							toNextFragment={toNextFragment}
						/>
						: <SequenceCreateContainer isEdit={isEdit}/>
					}
				</>
			)

		default:
			return <div>Ну и где тут игра?!?!?</div>
	}
}

export default GameContainer
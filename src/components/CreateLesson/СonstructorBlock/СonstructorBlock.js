import React, {useState} from "react";
import s from "./СonstructorBlock.module.css";
import Modal from "../Modal/Modal";
import FragmentsListContainer from "../FragmentsList/FragmentsListContainer";
import FragmentCardContainer from "../../MyFragments/FragmentsList/FragmentCard/FragmentCardContainer";

const ConstructorBlock = ({fragments, setFragments, ...props}) => {
	const [modalActive, setModalActive] = useState(false)
	let fragmentCards = [];

	for (let i = 0; i < fragments.length; i++) {
		let fragment = fragments[i];
		const card = <FragmentCardContainer
			id={fragment.id}
			key={fragment.id}
			fragmentType={fragment.type}
			title={fragment.title}
			isFavorite={fragment.favourite}
			tags={fragment.tags}
			fon={fragment.fon}
			content={fragment.content}
			createLesson={true}
			deleteFragment={props.deleteFragment}
		/>;
		if (i !== fragments.length - 1) {
			fragmentCards.push(card)
		} else {
			fragmentCards.push(
				<div className={s.lastCard}>
					{card}
					<button className={`${s.button} ${s.addButton}`} onClick={() => setModalActive(true)}/>
				</div>
			)
		}
	}

	return (
		<div>
			{fragments.length === 0 &&
				<button className={`${s.button} ${s.addButtonWithoutCard}`}
				        onClick={() => setModalActive(true)}/>
			}

			<div className={s.fragmentsList}>{fragmentCards}</div>

			{modalActive &&
				<Modal active={modalActive} setActive={setModalActive}>
					<FragmentsListContainer
						page={'my-fragments'}
						fragments={fragments}
						setModalActive={setModalActive}
						changeSelectedMode={props.changeSelectedMode}
						setFragments={setFragments}/>
				</Modal>
			}
		</div>
	)
}

export default ConstructorBlock;
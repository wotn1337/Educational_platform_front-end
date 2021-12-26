import React, {useState} from "react";
import s from "./СonstructorBlock.module.css";
import Modal from "../Modal/Modal";
import FragmentsListContainer from "../FragmentsList/FragmentsListContainer";
import FragmentCardContainer from "../../MyFragments/FragmentsList/FragmentCard/FragmentCardContainer";

const ConstructorBlock = (props) => {
	const [modalActive, setModalActive] = useState(false)
	let fragmentCards = [];

	for (let i = 0; i < props.fragments.length; i++) {
		let fragment = props.fragments[i];
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
		/>;
		if (i !== props.fragments.length - 1) {
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
			{props.fragments.length === 0 &&
				<button className={`${s.button} ${s.addButtonWithoutCard}`}
				        onClick={() => setModalActive(true)}/>
			}

			<div className={s.fragmentsList}>{fragmentCards}</div>

			{modalActive &&
				<Modal active={modalActive} setActive={setModalActive}>
					<FragmentsListContainer
						page={'my-fragments'}
						fragments={props.fragments}
						setModalActive={setModalActive}
						changeSelectedMode={props.changeSelectedMode}
						setFragments={props.setFragments}/>
				</Modal>
			}
		</div>
	)
}

export default ConstructorBlock;
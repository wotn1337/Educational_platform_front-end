import React, {useState} from "react";
import FragmentCard from "../../MyFragments/FragmentsList/FragmentCard/FragmentCard";
import s from "./СonstructorBlock.module.css";
import Modal from "../Modal/Modal";
import FragmentsListContainer from "../FragmentsList/FragmentsListContainer";

const ConstructorBlock = (props) => {

	const [modalActive, setModalActive] = useState(false)

	let fragmentCards = [];

	for (let i = 0; i < props.fragments.length; i++) {
		let fragment = props.fragments[i];
		if (i !== props.fragments.length - 1) {
			fragmentCards.push(
				<FragmentCard id={fragment.id} key={fragment.id} fragmentType={fragment.type}
				              title={fragment.title} tags={fragment.tags}/>
			)
		} else {
			fragmentCards.push(
				<div className={s.lastCard}>
					<FragmentCard id={fragment.id} key={fragment.id} fragmentType={fragment.type}
					              title={fragment.title} tags={fragment.tags}/>
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

			<Modal active={modalActive} setActive={setModalActive}>
				<FragmentsListContainer setModalActive={setModalActive}
				                        changeSelectedMode={props.changeSelectedMode}
				                        aggFragment={props.addFragment}/>
			</Modal>
		</div>
	)
}

export default ConstructorBlock;
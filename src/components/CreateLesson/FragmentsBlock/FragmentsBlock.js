import React, {useState} from "react";
import FragmentCard from "../../MyFragments/FragmentsList/FragmentCard/FragmentCard";
import s from "./FragmentsBlock.module.css";
import Modal from "../Modal/Modal";
import FragmentListContainer from "../FragmentsList/FragmentListContainer";

const FragmentsBlock = (props) => {

    const [modalActive, setModalActive] = useState(false)

    let fragmentCards = [];
    if (props.fragments.length === 0) {
        fragmentCards.push(
            <button className={`${s.button} ${s.addButtonWithoutCard}`} onClick={() => setModalActive(true)}/>
        )
    }

    for (let i = 0; i < props.fragments.length; i++) {
        let fragment = props.fragments[i];
        if (i !== props.fragments.length - 1) {
            fragmentCards.push(
                <FragmentCard id={fragment.id} key={fragment.id} fragmentType={fragment.type}
                              title={fragment.title}/>
            )
        } else {
            fragmentCards.push(
                <div className={s.lastCard}>
                    <FragmentCard id={fragment.id} key={fragment.id} fragmentType={fragment.type}
                                  title={fragment.title}/>
                    <button className={`${s.button} ${s.addButton}`} onClick={() => setModalActive(true)}/>
                </div>
            )
        }
    }

    return (
        <>
            <div className={s.fragmentsList}>
                {fragmentCards}
            </div>

            <Modal active={modalActive} setActive={setModalActive}>
                <FragmentListContainer setModalActive={setModalActive}
                                       changeSelectedMode={props.changeSelectedMode}
                                       aggFragment={props.addFragment}/>
            </Modal>
        </>
    )
}

export default FragmentsBlock;
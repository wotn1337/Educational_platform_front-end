import React, {useState} from "react";
import FragmentCard from "../../MyFragments/FragmentsList/FragmentCard/FragmentCard";
import s from "./FragmentsBlock.module.css";
import Modal from "../Modal/Modal";

const FragmentsBlock = (props) => {
    const [modalActive, setModalActive] = useState(false)

    let fragmentCards = [];
    for (let i = 0; i < props.fragments.length; i++) {
        let fragment = props.fragments[i];
        if (i !== props.fragments.length - 1) {
            fragmentCards.push(
                <FragmentCard id={fragment.id} key={fragment.id} fragmentType={fragment.type} title={fragment.title}/>
            )
        } else {
            fragmentCards.push(
                <div className={s.lastCard}>
                    <FragmentCard id={fragment.id} key={fragment.id} fragmentType={fragment.type}
                                  title={fragment.title}/>
                    <button className={s.addButton}
                            onClick={event => {
                                setModalActive(true)
                                // event.preventDefault();
                                // props.addFragment();
                            }}
                    />
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
                <p>Избранное</p>

            </Modal>
        </>
    )
}

export default FragmentsBlock;
import React from "react";
import Fragment from "./Fragment/Fragment";
import s from './FragmentsList.module.css';
import Pagination from "../../../common/Pagination/Pagination";

const FragmentsList = (props) => {
    const fragmentCards = props.myFragments.map(fragment => {
        return (
            <Fragment fragment={fragment} key={fragment.id} addFragment={props.addFragment}
                      isFragmentChosen={props.isFragmentChosen}
                      deleteFragment={props.deleteFragment}
                      getFragmentNumber={props.getFragmentNumber}
            />)
    });

    return (
        <div className={s.fragmentsWrapper}>
            <h3 className={s.title}>Мои фрагменты</h3>
            <div className={s.fragmentsList}>
                {fragmentCards}
                {fragmentCards.length < 1 && <p>Похоже, у вас нет фрагментов : (</p>}
            </div>
            <div className={s.actionBlock}>
                {props.lastPage > 1 &&
                    <div style={{width: '30%'}}>
                        <Pagination handler={props.changePage} currentPage={props.currentPage} prevPage={props.prevPage}
                                    lastPage={props.lastPage}
                                    nextPage={props.nextPage}
                        />
                    </div>
                }
                <button style={{marginLeft: props.lastPage < 2 ? 'auto' : ''}} className={s.addButton} onClick={() => {
                    props.setFragments();
                    props.setModalActive(false)
                }}>
                    Добавить
                </button>
            </div>
        </div>
    )
}

export default FragmentsList;
import React from "react";
import Fragment from "./Fragment/Fragment";
import s from './FragmentsList.module.css'
import Pagination from "../../Pagination/Pagination";

const FragmentsList = (props) => {
    const fragmentCards = props.myFragments.map(fragment => {
        return (
            <Fragment fragment={fragment} key={fragment.id} addFragment={props.addFragment}
                      isFragmentChosen={props.isFragmentChosen}
                      deleteFragment={props.deleteFragment}
                      setFragment={props.setFragment}
                      getFragmentNumber={props.getFragmentNumber}
            />)
    });

    return (
        <div className={s.fragmentsWrapper}>
            <h3 className={s.title}>Мои фрагменты</h3>
            <div className={s.fragmentsList}>
                {fragmentCards}
            </div>
            <div className={s.actionBlock}>
                <div style={{width: '30%'}}>
                    <Pagination handler={props.changePage} currentPage={props.currentPage} prevPage={props.prevPage}
                                lastPage={props.lastPage}
                                nextPage={props.nextPage}
                    />
                </div>
                <button className={s.addButton} onClick={() => {
                    props.setFragment();
                    props.setModalActive(false)
                }}>
                    Добавить
                </button>
            </div>
        </div>
    )
}

export default FragmentsList;
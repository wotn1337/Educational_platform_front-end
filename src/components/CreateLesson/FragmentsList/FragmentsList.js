import React from "react";
import Fragment from "./Fragment/Fragment";
import s from './FragmentsList.module.css'
import Pagination from "../../Pagination/Pagination";

const FragmentsList = (props) => {
    let fragmentCards = [];
    props.myFragments.map(fragment => {
        fragmentCards.push(
            <Fragment id={fragment.id} key={fragment.id} fragmentType={fragment.type} title={fragment.title}
                      setFragmentData={props.setFragmentData}
            />)
    });

    return (
        <div>
            <h3 className={s.title}>Мои фрагменты</h3>
            <div className={s.fragmentsList}>
                {fragmentCards}
            </div>
            <div style={{width: '30%'}}>
                <Pagination
                    handler={props.changePage}
                    currentPage={props.currentPage}
                    prevPage={props.prevPage}
                    lastPage={props.lastPage}
                    nextPage={props.nextPage}
                />
            </div>
            <button className={s.addButton} onClick={() => {
                props.addFragment();
                props.setModalActive(false)
            }}>
                Добавить
            </button>
        </div>
    )
}

export default FragmentsList;
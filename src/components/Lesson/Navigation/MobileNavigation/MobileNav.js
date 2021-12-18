import React from "react";
import s from '../Navigation.module.css'
import {NavLink} from "react-router-dom";

const MobileNavigation = ({lessonId, setCurrentFragment, prevOrder, nextOrder, prevId, nextId}) => {
    return (
        <section className={s.mobileNavigation}>
            <NavLink className={`${s.btn} ${s.btnBack}`}
                     to={`/lesson/${lessonId}${prevId ? `/${prevId}` : ''}`}
                     onClick={() => setCurrentFragment(prevOrder)}/>
            <NavLink className={`${s.btn} ${s.btnForward}`}
                     to={`/lesson/${lessonId}${nextId ? `/${nextId}` : ''}`}
                     onClick={() => setCurrentFragment(nextOrder)}/>
        </section>
    )
}

export default MobileNavigation

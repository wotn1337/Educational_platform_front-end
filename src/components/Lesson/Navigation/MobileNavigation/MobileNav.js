import React from "react";
import s from '../Navigation.module.css';

const MobileNavigation = ({setCurrentFragment, prevOrder, nextOrder}) => {
    return (
        <section className={s.mobileNavigation}>
            <div className={`${s.btn} ${s.btnBack}`}
                     onClick={() => setCurrentFragment(prevOrder)}/>
            <div className={`${s.btn} ${s.btnForward}`}
                     onClick={() => setCurrentFragment(nextOrder)}/>
        </section>
    )
}

export default MobileNavigation

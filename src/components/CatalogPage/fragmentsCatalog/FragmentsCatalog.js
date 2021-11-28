import React from 'react';
import s from "../../MyFragments/MyFragments.module.css";
import SearchBlockContainer from "./SearchBlock/SearchBlockContainer";
import FragmentsListContainer from "./FragmentsList/FragmentsListContainer";


const FragmentsCatalog = () => {
    return (
        <div className={s.content}>
            <h1 className={'pageTitle'}>Каталог фрагментов</h1>
            <SearchBlockContainer/>
            <FragmentsListContainer/>
        </div>
    );
};

export default FragmentsCatalog;
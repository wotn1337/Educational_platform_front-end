import React from 'react';
import s from "../../MyFragments/MyFragments.module.css";
import {withoutAuthRedirectToAuthPage} from "../../../hoc/withoutAuthRedirectToAuthPage";
import SearchBlockContainer from "../../MyFragments/SearchBlock/SearchBlockContainer";
import FragmentsListContainer from "../../MyFragments/FragmentsList/FragmentsListContainer";


const FragmentsCatalog = () => {
    return (
        <div className={s.content}>
            <h1 className={'pageTitle'}>Каталог фрагментов</h1>
            <SearchBlockContainer page={'catalog'}/>
            <FragmentsListContainer page={'catalog'}/>
        </div>
    );
};

export default withoutAuthRedirectToAuthPage(FragmentsCatalog);
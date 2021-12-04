import React from 'react';
import s from "../../MyFragments/MyFragments.module.css";
import SearchBlockContainer from "./SearchBlock/SearchBlockContainer";
import FragmentsListContainer from "./FragmentsList/FragmentsListContainer";
import {withoutAuthRedirectToAuthPage} from "../../../hoc/withoutAuthRedirectToAuthPage";


const FragmentsCatalog = () => {
    return (
        <div className={s.content}>
            <h1 className={'pageTitle'}>Каталог фрагментов</h1>
            <SearchBlockContainer/>
            <FragmentsListContainer/>
        </div>
    );
};

export default withoutAuthRedirectToAuthPage(FragmentsCatalog);
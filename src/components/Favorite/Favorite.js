import React from "react";
import s from './Favorite.module.css'
import FavoriteListContainer from "./FavoriteList/FavoriteListContainer";
import SearchBlockContainer from "./SearchBlock/SearchBlockContainer";

const Favorite = () => {
    return (
        <div className={s.content}>
            <h1 className={'pageTitle'}>Избранное</h1>
            <SearchBlockContainer/>
            <FavoriteListContainer/>
        </div>
    )
}

export default Favorite;
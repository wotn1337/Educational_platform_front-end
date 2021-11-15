import React from "react";
import s from './Favorite.module.css'
import FavoriteListContainer from "./FavoriteList/FavoriteListContainer";
import SearchBlockContainer from "./SearchBlock/SearchBlockContainer";

const Favorite = () => {
    return (
        <div className={s.content}>
            <SearchBlockContainer/>
            <FavoriteListContainer/>
        </div>
    )
}

export default Favorite;
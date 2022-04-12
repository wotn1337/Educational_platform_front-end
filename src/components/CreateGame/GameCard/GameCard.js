import React from 'react';
import s from './../../CatalogPage/lessonsCatalog/LessonsList/LessonCard/LessonCard.module.css';
import {previewImg} from "../../../common/fragmentsPreview";


const GameCard = ({game, setCurrentGame, setGameType, ...props}) => {
    return (
        <div className={s.lessonCard} onClick={() => {
            setGameType(game.type)
        }}>
            <div className={s.mainInfo}>
                <img src={previewImg[game.type]} alt="game" className={s.preview}/>
                <h3 className={s.titleGame}>{game.title}</h3>
                <p className={s.annotation}>{game.description}</p>
            </div>
            <div className={s.authorGame}/>
        </div>
    );
};

export default GameCard;

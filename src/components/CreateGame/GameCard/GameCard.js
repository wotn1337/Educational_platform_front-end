import React from 'react';
import s from './../../CatalogPage/lessonsCatalog/LessonsList/LessonCard/LessonCard.module.css';
import lessonPlaceholder from '../../../assets/img/fragments/gamePlaceholder.png';


const GameCard = ({game, setCurrentGame, setGameType, ...props}) => {
    return (
        <div className={s.lessonCard} onClick={() => {
            setGameType(game.title)
        }}>
            <div className={s.mainInfo}>
                <img src={lessonPlaceholder} alt="game" className={s.preview}/>
                <h3 className={s.title}>{game.title}</h3>
                <p className={s.annotation}>{game.description}</p>
            </div>
            <div className={s.author}/>
        </div>
    );
};

export default GameCard;

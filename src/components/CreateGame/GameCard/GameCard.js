import React from 'react';
import s from './../../CatalogPage/lessonsCatalog/LessonsList/LessonCard/LessonCard.module.css';
import lessonPlaceholder from '../../../assets/img/fragments/gamePlaceholder.png';


const GameCard = ({game, setCurrentGame, setGameType, ...props}) => {
    return (
        <div className={s.lessonCard} onClick={() => {
            setGameType(game.type)
        }}>
            <div className={s.mainInfo}>
                <img src={lessonPlaceholder} alt="game" className={s.preview}/>
                <div className={s.tags}>
                    {/*<Tags tags={game.tags}/>*/}
                </div>
                <h3 className={s.title}>{game.title}</h3>
                <p className={s.annotation}>{game.annotation}</p>
            </div>
            <div className={s.author}/>
        </div>
    );
};

export default GameCard;

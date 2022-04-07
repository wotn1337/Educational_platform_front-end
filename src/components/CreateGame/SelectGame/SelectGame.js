import React from 'react';
import GameCard from "../GameCard/GameCard";
import PairsCreate from "../PairsCreate";
import AssociationsCreateContainer from "../Associations/AssociationsCreateContainer";
import s from "../../CreateFragment/CreateImage/CreateImage.module.css";
import FragmentTitle from "../../CreateFragment/FragmentTitle/FragmentTitle";

const SelectGame = (props) => {
    const gamesTemplate = props.games?.map(game => (
        <GameCard game={game} setGameType={props.setGameType} key={game.id}/>
    ));
    return (
        <>
            {props.gameType &&
                <>
                    {!props.isEdit && <FragmentTitle/>}
                    <div className={s.annotation}>
                        <h3>Описание задания</h3>
                        <textarea className={`textarea ${s.annotationText}`}
                                  value={props.task}
                                  onChange={e => props.setTask(e.target.value)}/>
                    </div>
                </>
            }
            {props.gameType === 'pairs'
                && <PairsCreate setContent={props.setContent} setGameType={props.setGameType}/>}
            {props.gameType === 'matchmaking'
                && <AssociationsCreateContainer setContent={props.setContent} setGameType={props.setGameType}/>}
            {!props.gameType && <div style={{display: 'grid', gap: 50, marginTop: 30}}>{gamesTemplate}</div>}
        </>
    )
}

export default SelectGame;